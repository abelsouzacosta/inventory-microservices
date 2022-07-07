import { Router } from 'express';
import createInitialData from '../../config/db/initialdata.mjs';
import categoryRouter from './category.routes.mjs';
import supplierRouter from './supplier.routes.mjs';
import productRouter from './product.routes.mjs';

const router = Router();

router.get('/', (req, res) => res.redirect('/api/status'));

router.get('/api/status', (req, res) =>
  res.status(200).json({
    service: 'Products Service',
    status: 'up',
    httpStatus: 200,
  }),
);

router.get('/init', async (req, res) => {
  createInitialData()
    .then(() => {
      console.log(`Initial data of user was created`);

      return res.json({
        message: 'Initial Data of User was created',
      });
    })
    .catch((err) => {
      console.error(err);

      return res.json({
        message: 'There was an error trying to create the initial data of user',
      });
    });
});

router.use('/categories', categoryRouter);

router.use('/suppliers', supplierRouter);

router.use('/products', productRouter);

export default router;
