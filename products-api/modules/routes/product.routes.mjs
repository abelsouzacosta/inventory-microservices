import { Router } from 'express';
import controller from '../controllers/product/ProductController.mjs';
import supplierNotFoundPipe from '../pipes/supplier/SupplierNotFoundPipe.mjs';
import eanAlredyExistsPipe from '../pipes/product/EanAlredyExistsPipe.mjs';
import eanAlreadyTakenPipe from '../pipes/product/EanAlreadyTakenPipe.mjs';

const router = Router();

router.get('/', controller.list);

router.get('/:id', controller.getProduct);

router.post(
  '/',
  supplierNotFoundPipe.execute,
  eanAlredyExistsPipe.execute,
  controller.create,
);

router.put('/:id', eanAlreadyTakenPipe.execute, controller.update);

router.patch('/:id', supplierNotFoundPipe.execute, controller.updateSupplier);

router.delete('/:id', controller.delete);

export default router;
