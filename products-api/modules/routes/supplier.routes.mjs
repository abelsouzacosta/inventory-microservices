import { Router } from 'express';
import controller from '../controllers/supplier/SupplierController.mjs';

const router = Router();

router.get('/:id', controller.getSupplier);

router.get('/', controller.list);

router.post('/', controller.create);

export default router;
