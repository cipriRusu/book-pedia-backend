import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import { frontPageMapper } from './mockData/dataMappings';
import { IFrontpageDbData } from './interfaces/IFrontpageDbData';
import { GET_FRONTPAGE_DATA } from './mockData/queries';
import { setupScripts } from './mockData/setupScripts';

let db = new Database('pedia.db');

setupScripts(db);

const app = express();

//TODO: Allowing global CORS requests for now, to simplify testing
app.use(cors())

const port = process.env.DEFAULT_PORT;
const FRONTPAGE_ROUTE = process.env.FRONTPAGE_ROUTE;

app.get(`/${FRONTPAGE_ROUTE}`, (_req, res) => {
  const dbData = db.prepare(GET_FRONTPAGE_DATA).get() as IFrontpageDbData
  res.send(frontPageMapper(dbData));
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});