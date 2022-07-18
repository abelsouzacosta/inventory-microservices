import { Router } from 'express';
import controller from '../controllers/category/CategoryController.mjs';
import categoryNotFoundPipe from '../pipes/category/CategoryNotFoundPipe.mjs';
import categoryAlreadyExistsPipe from '../pipes/category/CategoryAlreadyExistsPipe.mjs';
import categoryNameAlreadyTakenPipe from '../pipes/category/CategoryNameAlreadyTakenPipe.mjs';

const router = Router();

router.get('/:id', categoryNotFoundPipe.execute, controller.getCategory);

router.get('/', controller.list);

router.post('/', categoryAlreadyExistsPipe.execute, controller.create);

router.put(
  '/:id',
  categoryNotFoundPipe.execute,
  categoryNameAlreadyTakenPipe.execute,
  controller.update,
);

router.delete('/:id', categoryNotFoundPipe.execute, controller.delete);

export default router;
