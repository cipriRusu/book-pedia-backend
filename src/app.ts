import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import { frontPageMapper, resourceMapper } from './mockData/dataMappings';
import { IFrontpageDbData, IResourceDbData } from './interfaces/IDbData';
import { GET_ALL_RESOURCES, GET_FRONTPAGE_DATA, GET_SPECIFIC_RESOURCE } from './mockData/queries';
import { setupScripts } from './mockData/setupScripts';
import { } from 'querystring';
import { queryComposer } from './mockData/queryComposer';

let db = new Database('pedia.db');

//TODO: Handle async/await properly
setupScripts(db);

const app = express();

//TODO: Allowing global CORS requests for now, to simplify testing
app.use(cors())

const port = process.env.DEFAULT_PORT;
const FRONTPAGE_ROUTE = process.env.FRONTPAGE_ROUTE;
const ARTICLE_ROUTE = process.env.ARTICLE_ROUTE;
const LISTING_ROUTE = process.env.LISTING_ROUTE;

app.get(`/${FRONTPAGE_ROUTE}`, (_req, res) => {
  const dbResourcesData = db.prepare(GET_ALL_RESOURCES).all() as IResourceDbData[];
  const dbFrontpageData = db.prepare(GET_FRONTPAGE_DATA).get() as IFrontpageDbData;

  res.type('json')
  res.statusCode = 200;
  res.send(frontPageMapper(dbFrontpageData, dbResourcesData));
});

app.get(`/${ARTICLE_ROUTE}/:id`, (req, res) => {
  const id = req.params.id;
  const dbResourceData = db.prepare(GET_SPECIFIC_RESOURCE).get(id) as IResourceDbData;

  res.type('json')
  res.statusCode = 200;
  res.send(resourceMapper(dbResourceData));
});

app.get(`/${LISTING_ROUTE}`, (req, res) => {
  let tagQuery = req.query.tag as String;
  //TODO: Implement sorting
  let sortQuery = req.query.sort as String;

  let filteredData = queryComposer(db, tagQuery)

  res.type('json');
  res.statusCode = 200;
  res.send(filteredData);
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});