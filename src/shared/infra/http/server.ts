import 'reflect-metadata';
import '@shared/infra/typeorm';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
