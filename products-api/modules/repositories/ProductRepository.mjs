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

  async update(id, name, ean) {
    const product = await Product.findByPk(id);

    await product.update({ name, ean });

    return product;
  }

  async updateSupplier(id, supplier_id) {
    const product = await Product.findByPk(id);

    await product.update({ supplier_id });

    return product;
  }
}

export default new ProductRepository();
