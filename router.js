import express from 'express';
import homeRouter from './routes/home/home.routes.js';
import authRouter from './routes/auth/auth.routes.js';

const router = express.Router();

router.use(homeRouter);
router.use(authRouter);

export default router;
