import express from 'express';
const app  = express();
import getVariables from './config/server.config';

let port = getVariables('port');
app.listen(port, ()=>{
  console.log(`Server started on ${port}`);
  console.log('DONE');
})