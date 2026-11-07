import { randomUUID } from 'node:crypto';
import { faker } from '@faker-js/faker';

export const GET_FRONTPAGE_DATA = "SELECT * FROM frontpage";

export const GET_ALL_RESOURCES = "SELECT * FROM resources";

export const GET_SPECIFIC_RESOURCE = "SELECT * FROM resources WHERE primary_key = ?";

export const GET_RANDOM_TAG = "SELECT * from tags ORDER BY random() LIMIT 1";

export const GET_TAG_ID = "SELECT primary_key FROM TAGS WHERE title = ?";

export const CREATE_FRONTPAGE_TABLE = "CREATE TABLE IF NOT EXISTS frontpage( \
  primary_key ID TEXT PRIMARY KEY, \
  top_header TEXT, \
  header TEXT, \
  front_page_body TEXT \
);"

export const CREATE_RESOURCE_TABLE = "CREATE TABLE IF NOT EXISTS resources( \
  primary_key ID TEXT PRIMARY KEY, \
  title TEXT, \
  description TEXT, \
  footer TEXT \
);"

export const CREATE_TAGS_TABLE = "CREATE TABLE IF NOT EXISTS tags( \
  primary_key ID TEXT PRIMARY KEY, \
  title TEXT \
);"

export const CREATE_JUNCTION_RESOURCES_TAGS_TABLE = "CREATE TABLE IF NOT EXISTS junction_resources_tags( \
  primary_key ID TEXT PRIMARY KEY, \
  resource_key ID TEXT, \
  tag_key ID TEXT, \
  FOREIGN KEY(resource_key) REFERENCES resources(primary_key), \
  FOREIGN KEY(tag_key) REFERENCES tags(primary_key) \
);"

export const POPULATE_TAGS_DATA = () => [
  randomUUID(),
  faker.food.fruit()
];

export const POPULATE_FRONTPAGE_QUERY = `INSERT INTO frontpage (primary_key, top_header, header, front_page_body) VALUES (?, ?, ?, ?)`;

export const POPULATE_TAGS_QUERY = `INSERT INTO tags (primary_key, title) VALUES (?, ?)`;

export const POPULATE_JUNCTION_RESOURCES_TAGS_QUERY = `INSERT INTO junction_resources_tags (primary_key, resource_key, tag_key) VALUES (?, ?, ?)`;

export const INNER_JOIN_RESOURCE_TAGS_QUERY = `\
SELECT \
r.primary_key, \
r.title, \
r.description, \
r.footer \
FROM resources r \
INNER JOIN junction_resources_tags jrt ON r.primary_key = jrt.resource_key
INNER JOIN tags t ON jrt.tag_key = t.primary_key
`;

export const WHERE_STATEMENT = ` WHERE `;

export const TAG_TITLE = "t.title";

export const SET_PARAMS_BY_COUNT = (parsedTags: String[]) => ` IN (${parsedTags.map((_tag) => { return '?' })})`;

export const POPULATE_FRONTPAGE_DATA = () => [
  randomUUID(),
  faker.lorem.words(4),
  faker.lorem.word().toUpperCase(),
  faker.lorem.words(40)
];

export const POPULATE_RESOURCE_QUERY = `INSERT INTO resources (primary_key, title, description, footer) VALUES (?, ?, ?, ?)`;

export const POPULATE_RESOURCE_DATA = () => [
  randomUUID(),
  faker.location.city(),
  faker.lorem.words(20),
  faker.lorem.words(10)
];