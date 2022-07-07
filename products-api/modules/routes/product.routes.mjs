import { Router } from 'express';
import controller from '../controllers/product/ProductController.mjs';

const router = Router();

router.get('/', controller.list);

export default router;
