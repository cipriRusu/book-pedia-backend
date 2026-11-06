import { IResourceDbData } from "../interfaces/IDbData";
import { INNER_JOIN_RESOURCE_TAGS_QUERY, SET_PARAMS, TAG_KEY_FILTER, WHERE_STATEMENT } from "./queries";
import { tagParser } from "./utils";
import { Database } from 'better-sqlite3';

export const queryComposer = (db: Database, tagQuery: String) => {
    //TODO: Refactor after several filters get applied.
    let query: string = '';

    query = query.concat(INNER_JOIN_RESOURCE_TAGS_QUERY);

    let parsedTags: String[] = tagParser(db, tagQuery);

    if (parsedTags.length > 0) {
        query = query.concat(WHERE_STATEMENT)
        query = query.concat(TAG_KEY_FILTER)
        query = query.concat(SET_PARAMS(parsedTags))
    }

    return db.prepare(query).all(...parsedTags) as IResourceDbData[]
}