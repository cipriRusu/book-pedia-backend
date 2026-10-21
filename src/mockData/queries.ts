import { randomUUID } from 'node:crypto';

export const GET_FRONTPAGE_DATA = "SELECT * FROM frontpage";

export const CREATE_FRONTPAGE_TABLE = "CREATE TABLE IF NOT EXISTS frontpage( \
  primary_key ID TEXT PRIMARY_KEY, \
  top_header TEXT, \
  header TEXT, \
  front_page_body TEXT \
);"

export const POPULATE_FRONTPAGE_QUERY = `INSERT INTO frontpage (primary_key, top_header, header, front_page_body) VALUES (?, ?, ?, ?)`;

export const POPULATE_FRONTPAGE_DATA = [randomUUID(),
    "Curated information from my personal books",
    "Book-Wiki-Pedia",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
  Lorem Ipsum has been the industry's standard dummy text ever since 1966, \
  when designers at Letraset and versions of Lorem Ipsum"]