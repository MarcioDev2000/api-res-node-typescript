import express from 'express';

const servidor = express();

servidor.get('/', (req, res) =>{
  return  res.send('Rota Principal');
})




export {servidor}