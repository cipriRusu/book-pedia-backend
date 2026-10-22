import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import { frontPageMapper, resourceMapper } from './mockData/dataMappings';
import { IFrontpageDbData, IResourceDbData } from './interfaces/IDbData';
import { GET_ALL_RESOURCES, GET_FRONTPAGE_DATA, GET_SPECIFIC_RESOURCE } from './mockData/queries';
import { setupScripts } from './mockData/setupScripts';

let db = new Database('pedia.db');

//TODO: Handle async/await properly
setupScripts(db);

const app = express();

//TODO: Allowing global CORS requests for now, to simplify testing
app.use(cors())

const port = process.env.DEFAULT_PORT;
const FRONTPAGE_ROUTE = process.env.FRONTPAGE_ROUTE;
const ARTICLE_ROUTE = process.env.ARTICLE_ROUTE;

app.get(`/${FRONTPAGE_ROUTE}`, (_req, res) => {
  //TODO: Encapsulate resource handler in functions
  const dbResourcesData = db.prepare(GET_ALL_RESOURCES).all() as IResourceDbData[];
  const dbFrontpageData = db.prepare(GET_FRONTPAGE_DATA).get() as IFrontpageDbData
  
  res.type('json')
  res.statusCode = 200;
  res.send(frontPageMapper(dbFrontpageData, dbResourcesData));
});

app.get(`/${ARTICLE_ROUTE}/:id`, (req, res) => {
  const id = req.params.id;
  const dbResourceData = db.prepare(GET_SPECIFIC_RESOURCE).get(id) as IResourceDbData;

  res.type('json')
  res.statusCode = 200;
  res.send(resourceMapper(dbResourceData))
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});