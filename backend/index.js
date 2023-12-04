import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
import db from './configs/Database.js';
import Model from './models/ModelProgram.js';
dotenv.config();

// Route
import RouteAuth from './routers/RouteAuth.js';
import RouteMahasiswa from './routers/RouteMahasiswa.js';
import RouteDosen from './routers/RouteDosen.js';
import RouteBerita from './routers/RouteBerita.js';
import RouteProgram from './routers/RouteProgram.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  await db.authenticate();
  console.log('Database connected....');
  await Model.sync();
} catch (error) {
  console.log(error);
}

const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(
  '/public/images',
  express.static(path.join(__dirname, 'public/images')),
);

app.use('/auth', RouteAuth);
app.use('/mahasiswa', RouteMahasiswa);
app.use('/dosen', RouteDosen);
app.use('/berita', RouteBerita);
app.use('/program', RouteProgram);

app.listen(port, () => console.log(`Server up running at port ${port}....`));
