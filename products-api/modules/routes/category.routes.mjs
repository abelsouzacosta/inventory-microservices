import { Router } from 'express';
import controller from '../controllers/category/CategoryController.mjs';
import categoryNotFoundPipe from '../pipes/category/CategoryNotFoundPipe.mjs';

const router = Router();

<<<<<<< HEAD
router.get('/:id', categoryNotFoundPipe.execute, controller.getCategory);

router.get('/', controller.list);

=======
>>>>>>> parent of ce2db4b (adding route GET /categories - list all categories)
router.post('/', controller.create);

router.put('/:id', categoryNotFoundPipe.execute, controller.update);

router.delete('/:id', categoryNotFoundPipe.execute, controller.delete);

export default router;
