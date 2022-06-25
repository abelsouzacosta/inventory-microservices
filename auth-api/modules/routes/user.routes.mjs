import { Router } from 'express';
import controller from '../controllers/UserController.mjs';
import emailPipe from '../pipe/EmailAlreadyExistsPipe.mjs';

const router = Router();

router.get('/', controller.list);

router.post('/', emailPipe.execute, controller.create);

export default router;
