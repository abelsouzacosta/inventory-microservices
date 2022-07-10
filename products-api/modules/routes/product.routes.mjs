import { Router } from 'express';
import controller from '../controllers/product/ProductController.mjs';
import supplierNotFoundPipe from '../pipes/supplier/SupplierNotFoundPipe.mjs';
import eanAlredyExistsPipe from '../pipes/product/EanAlredyExistsPipe.mjs';
import eanAlreadyTakenPipe from '../pipes/product/EanAlreadyTakenPipe.mjs';
import productNotFoundPipe from '../pipes/product/ProductNotFoundPipe.mjs';

const router = Router();

router.get('/', controller.list);

router.get('/:id', controller.getProduct);

router.post(
  '/',
  supplierNotFoundPipe.execute,
  eanAlredyExistsPipe.execute,
  controller.create,
);

router.put(
  '/:id',
  productNotFoundPipe.execute,
  eanAlreadyTakenPipe.execute,
  controller.update,
);

router.patch(
  '/:id',
  productNotFoundPipe.execute,
  supplierNotFoundPipe.execute,
  controller.updateSupplier,
);

router.delete('/:id', productNotFoundPipe.execute, controller.delete);

export default router;
