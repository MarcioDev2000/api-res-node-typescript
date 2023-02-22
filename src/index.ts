import { servidor } from './server/server';
servidor.listen(process.env.PORT || 3333, ()=> {
  console.log(`Servidor Ligado na Porta ${process.env.PORT || 3333}`);
});



