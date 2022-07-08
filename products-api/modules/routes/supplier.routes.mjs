import { Router } from 'express';
import controller from '../controllers/supplier/SupplierController.mjs';
import supplierNotFoundPipe from '../pipes/supplier/SupplierNotFoundPipe.mjs';

const router = Router();

router.get('/:id', controller.getSupplier);

router.get('/', controller.list);

router.post('/', controller.create);

router.put('/:id', supplierNotFoundPipe.execute, controller.update);

router.delete('/:id', supplierNotFoundPipe.execute, controller.delete);

export default router;
