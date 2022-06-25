import { Router } from 'express';
import controller from '../controllers/authorization/AuthController.mjs';

const authRouter = Router();

authRouter.post('/sign-in', controller.authorize);

export default authRouter;
