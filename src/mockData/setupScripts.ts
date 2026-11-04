import fs from 'fs'
import { Database } from 'better-sqlite3';
import { writeFile, readFile } from 'node:fs/promises'
import { stringify, parse } from 'ini';

import {
    CREATE_FRONTPAGE_TABLE,
    POPULATE_FRONTPAGE_DATA,
    POPULATE_FRONTPAGE_QUERY,
    CREATE_RESOURCE_TABLE,
    POPULATE_RESOURCE_QUERY,
    POPULATE_RESOURCE_DATA,
    CREATE_TAGS_TABLE,
    POPULATE_TAGS_DATA,
    POPULATE_TAGS_QUERY,
    CREATE_JUNCTION_RESOURCES_TAGS_TABLE,
    POPULATE_JUNCTION_RESOURCES_TAGS_QUERY,
    GET_ALL_RESOURCES,
    GET_RANDOM_TAG
} from '../mockData/queries';
import { randomUUID } from 'node:crypto';
import { IResourceDbData, ITagData } from '../interfaces/IDbData';

export const setupScripts = async (db: Database) => {
    const NUMBER_OF_RESOURCES = 10;
    const NUMBER_OF_TAGS = 5;

    //TODO: Refactor versioning and file check
    if (!fs.existsSync('./config.ini')) {
        await writeFile('config.ini', '[versioning]\nversion=0.0.0')
    }

    let text = await readFile(`./config.ini`, {
        encoding: 'utf-8'
    })

    const config = parse(text)

    if (config.versioning && config.versioning.version === '0.0.0') {
        db.exec(CREATE_FRONTPAGE_TABLE);
        db.exec(CREATE_RESOURCE_TABLE);
        db.prepare(POPULATE_FRONTPAGE_QUERY).run(...POPULATE_FRONTPAGE_DATA());

        for (let i = 0; i < NUMBER_OF_RESOURCES; i++) {
            db.prepare(POPULATE_RESOURCE_QUERY).run(...POPULATE_RESOURCE_DATA());
        }

        config.versioning.version = '0.0.1';
        await writeFile(`./config.ini`, stringify(config), { encoding: 'utf-8' });
    }

    if (config.versioning && config.versioning.version === '0.0.1') {
        db.exec(CREATE_TAGS_TABLE);

        for (let i = 0; i < NUMBER_OF_TAGS; i++) {
            db.prepare(POPULATE_TAGS_QUERY).run(...POPULATE_TAGS_DATA());
        }

        config.versioning.version = '0.0.2';
        await writeFile(`./config.ini`, stringify(config), { encoding: 'utf-8' });
    }

    if (config.versioning && config.versioning.version === '0.0.2') {
        db.exec(CREATE_JUNCTION_RESOURCES_TAGS_TABLE);

        const ALL_RESOURCES: IResourceDbData[] = db.prepare(GET_ALL_RESOURCES).all() as IResourceDbData[];

        for (let resource of ALL_RESOURCES) {
            let tag = db.prepare(GET_RANDOM_TAG).get() as ITagData;
            db.prepare(POPULATE_JUNCTION_RESOURCES_TAGS_QUERY).run(randomUUID(), resource.primary_key, tag.primary_key)
        }

        config.versioning.version = '0.0.3';
        await writeFile(`./config.ini`, stringify(config), { encoding: 'utf-8' });
    }
}