import express from 'express';
import getVariables from './config/server.config';
import apiRouter from './routes';
const app  = express();

const port = getVariables('port');

const basPath: string = '/problem-evaluator';

app.use(`${basPath}/api`, apiRouter);

app.listen(port, ()=>{
  console.log(`Server started on ${port}`);
})