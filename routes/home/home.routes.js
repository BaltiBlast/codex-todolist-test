import express from 'express';
import { homePage } from '../../modules/home/home.controllers.js';

const homeRouter = express.Router();

homeRouter.get('/', homePage);

export default homeRouter;
