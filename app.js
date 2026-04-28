import dotenv from 'dotenv';
import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './router.js';
import connectDatabase from './configs/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/main');

app.use(expressEjsLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(router);

const startServer = async () => {
  await connectDatabase();

  app.listen(port, () => {
    console.log(`Tododex lancé sur http://localhost:${port}`);
  });
};

startServer();
