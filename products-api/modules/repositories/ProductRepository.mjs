import { Product } from '../models/index.mjs';

class ProductRepository {
  async list() {
    const products = await Product.findAll();

    return products;
  }

  async create(name, ean, supplier_id) {
    const product = await Product.create({
      name,
      ean,
      supplier_id,
    });

    return product;
  }
}

export default new ProductRepository();
