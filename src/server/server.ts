import express from 'express';
import 'dotenv/config';

import { rotas } from './routes';

const servidor = express();


servidor.use(express.json());
servidor.use(rotas);

export {servidor};