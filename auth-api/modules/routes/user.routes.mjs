import { Router } from 'express';
import controller from '../controllers/users/UserController.mjs';
import emailAlreadyExistsPipe from '../pipes/EmailAlreadyExistsPipe.mjs';

const router = Router();

router.get('/', controller.list);

router.post('/', emailAlreadyExistsPipe.execute, controller.create);

export default router;
