import { Product } from '../models/index.mjs';

class ProductRepository {
  async list() {
    const products = await Product.findAll();

    return products;
  }
}

export default new ProductRepository();
