import { Router } from 'express';
import controller from '../controllers/authorization/AuthController.mjs';
import userNotFoundPipe from '../pipes/UserNotFoundPipe.mjs';

const authRouter = Router();

authRouter.post('/sign-in', userNotFoundPipe.execute, controller.authorize);

export default authRouter;
