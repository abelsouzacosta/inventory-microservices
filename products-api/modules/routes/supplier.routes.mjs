import { Router } from 'express';
import controller from '../controllers/supplier/SupplierController.mjs';

const router = Router();

router.get('/', controller.list);

export default router;