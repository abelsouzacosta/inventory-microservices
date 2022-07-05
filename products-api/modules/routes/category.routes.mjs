import { Router } from 'express';
import controller from '../controllers/category/CategoryController.mjs';

const router = Router();

router.get('/', controller.list);

router.post('/', controller.create);

export default router;
