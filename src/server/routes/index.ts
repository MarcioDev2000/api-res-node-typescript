import {Router } from 'express';
import { StatusCodes} from 'http-status-codes';

const rotas = Router();

rotas.get('/', (req, res) => {
  return  res.send('Página Principal');
});

rotas.post('/teste', (req, res) => {

  console.log(req.body);
  return  res.status(StatusCodes.LOCKED).json(req.body);
  
});
  

export {rotas};