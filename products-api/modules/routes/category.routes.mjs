import { Router } from 'express';
import controller from '../controllers/category/CategoryController.mjs';

const router = Router();

router.get('/:id', controller.getCategory);

router.get('/', controller.list);

router.post('/', controller.create);

router.put('/:id', controller.update);

export default router;
