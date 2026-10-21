import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import { frontPageMapper } from './mockData/dataMappings';
import { IFrontpageDbData, IResourceDbData } from './interfaces/IDbData';
import { GET_ALL_RESOURCES, GET_FRONTPAGE_DATA } from './mockData/queries';
import { setupScripts } from './mockData/setupScripts';

let db = new Database('pedia.db');

setupScripts(db);

const app = express();

//TODO: Allowing global CORS requests for now, to simplify testing
app.use(cors())

const port = process.env.DEFAULT_PORT;
const FRONTPAGE_ROUTE = process.env.FRONTPAGE_ROUTE;

app.get(`/${FRONTPAGE_ROUTE}`, (_req, res) => {
  const dbResourcesData = db.prepare(GET_ALL_RESOURCES).all() as IResourceDbData[];
  const dbFrontpageData = db.prepare(GET_FRONTPAGE_DATA).get() as IFrontpageDbData
  res.type('json')
  res.statusCode = 200;
  res.send(frontPageMapper(dbFrontpageData, dbResourcesData));
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});