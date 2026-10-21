import { Database } from 'better-sqlite3';
import { writeFile, readFile } from 'node:fs/promises'
import { stringify, parse } from 'ini';

import {
    CREATE_FRONTPAGE_TABLE,
    POPULATE_FRONTPAGE_DATA,
    POPULATE_FRONTPAGE_QUERY,
    CREATE_RESOURCE_TABLE,
    POPULATE_RESOURCE_QUERY,
    POPULATE_RESOURCE_DATA
} from '../mockData/queries';

export const setupScripts = async (db: Database) => {
    const NUMBER_OF_RESOURCES = 10;

    let text = await readFile(`./config.ini`, {
        encoding: 'utf-8'
    })

    const config = parse(text)

    //TODO: Refactor versioning
    if (config.versioning && config.versioning.version === '0.0.0') {
        db.exec(CREATE_FRONTPAGE_TABLE);
        db.exec(CREATE_RESOURCE_TABLE);
        db.prepare(POPULATE_FRONTPAGE_QUERY).run(...POPULATE_FRONTPAGE_DATA());

        for (let i = 0; i < NUMBER_OF_RESOURCES; i++) {
            db.prepare(POPULATE_RESOURCE_QUERY).run(...POPULATE_RESOURCE_DATA());
        }

        config.versioning.version = '1.0.0';
        await writeFile(`./config.ini`, stringify(config), { encoding: 'utf-8' });
    }
}