import { randomUUID } from 'node:crypto';
import { faker } from '@faker-js/faker';

export const GET_FRONTPAGE_DATA = "SELECT * FROM frontpage";

export const CREATE_FRONTPAGE_TABLE = "CREATE TABLE IF NOT EXISTS frontpage( \
  primary_key ID TEXT PRIMARY_KEY, \
  top_header TEXT, \
  header TEXT, \
  front_page_body TEXT \
);"

export const CREATE_RESOURCE_TABLE = "CREATE TABLE IF NOT EXISTS resources( \
  primary_key ID TEXT PRIMARY_KEY, \
  title TEXT, \
  description TEXT, \
  footer TEXT \
);"

export const POPULATE_FRONTPAGE_QUERY = `INSERT INTO frontpage (primary_key, top_header, header, front_page_body) VALUES (?, ?, ?, ?)`;

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