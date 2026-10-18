import express from 'express';
import cors from 'cors';

//TODO:For now, data will be provided as JSON and will gradually be replaced with a database.
import frontpage from './mockData/frontpage.json'

const app = express();

//TODO: Allowing global CORS requests for now, to simplify testing
app.use(cors())

const port = process.env.DEFAULT_PORT;

app.get('/frontpage', (_req, res) => {
  res.send(frontpage);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});