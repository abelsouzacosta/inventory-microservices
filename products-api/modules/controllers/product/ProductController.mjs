import service from '../../services/product/ProductService.mjs';
import HttpStatus from '../../../shared/infra/constants/server/HttpStatus.mjs';

class ProductController {
  async list(req, res) {
    const products = await service.list();

    return res.status(HttpStatus.OK).json(products);
  }
}

export default new ProductController();
