import express from 'express';
import { loginPage, registerPage } from '../../modules/auth/auth.controllers.js';

const authRouter = express.Router();

authRouter.get('/auth/login', loginPage);
authRouter.get('/auth/register', registerPage);

export default authRouter;
