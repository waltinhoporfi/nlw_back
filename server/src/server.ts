import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';
 
const app = express();

//get  = listar usuarios
//post = criar usuario
//put  = atualiza usuario
//delete = remove usuario

// Request Param: Parâmetros que vem na rota
// Query Param: Parâmetros que vem na rota e são opcionais para filtros, paginação... 
// Request Body: Parâmetros para criação e atualização

// SELECT * FROM users WHERE name = 'Walter'
// knex('users').where('name', 'Walter').select('*')

app.use(cors({}));
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);