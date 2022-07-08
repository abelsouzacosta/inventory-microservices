import { Router } from 'express';
import controller from '../controllers/product/ProductController.mjs';
import supplierNotFoundPipe from '../pipes/supplier/SupplierNotFoundPipe.mjs';

const router = Router();

router.get('/', controller.list);

router.get('/:id', controller.getProduct);

router.post('/', supplierNotFoundPipe.execute, controller.create);

router.put('/:id', controller.update);

router.patch('/:id', supplierNotFoundPipe.execute, controller.updateSupplier);

router.delete('/:id', controller.delete);

export default router;
