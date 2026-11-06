import { ITagData } from "../interfaces/IDbData";
import { GET_TAG_ID } from "./queries";
import { Database } from 'better-sqlite3';

export const tagParser = (db: Database, tagQuery: String): String[] =>
    tagQuery.split(',')
        .filter((tagTitle: string) => tagTitle !== '')
        .map((tagTitle: string) =>
            getTagDataFromTitle(db, tagTitle)?.['primary_key']) as String[];

const getTagDataFromTitle = (db: Database, title: string): ITagData =>
    db.prepare(GET_TAG_ID).get(title) as ITagData;