import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors())

const port = 3001;

app.get('/frontpage', (_req, res) => {
  res.send(JSON.parse('{"header": "Book-Wiki-Pedia"}'));
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});