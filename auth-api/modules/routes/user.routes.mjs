import { Router } from 'express';
import controller from '../controllers/users/UserController.mjs';
import emailPipe from '../pipes/EmailAlreadyExistsPipe.mjs';

const router = Router();

router.get('/', controller.list);

router.post('/', emailPipe.execute, controller.create);

export default router;
