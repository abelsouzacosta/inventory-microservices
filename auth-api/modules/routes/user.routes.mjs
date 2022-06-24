import { Router } from 'express';
import controller from '../controllers/UserController.mjs';

const router = Router();

router.get('/', controller.list);

router.post('/', controller.create);

export default router;
