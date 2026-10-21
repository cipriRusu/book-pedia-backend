import { Database } from 'better-sqlite3';

import {
    CREATE_FRONTPAGE_TABLE,
    POPULATE_FRONTPAGE_DATA,
    POPULATE_FRONTPAGE_QUERY,
    CREATE_RESOURCE_TABLE,
    POPULATE_RESOURCE_QUERY,
    POPULATE_RESOURCE_DATA
} from '../mockData/queries';

export const setupScripts = (db: Database) => {
    const NUMBER_OF_RESOURCES = 10;

    db.exec(CREATE_FRONTPAGE_TABLE);
    db.exec(CREATE_RESOURCE_TABLE);
    db.prepare(POPULATE_FRONTPAGE_QUERY).run(...POPULATE_FRONTPAGE_DATA());

    for (let i = 0; i < NUMBER_OF_RESOURCES; i++) {
        db.prepare(POPULATE_RESOURCE_QUERY).run(...POPULATE_RESOURCE_DATA());
    }
}