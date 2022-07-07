import { Router } from 'express';
import controller from '../controllers/product/ProductController.mjs';

const router = Router();

router.get('/', controller.list);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.patch('/:id', controller.updateSupplier);

export default router;
