import logger from '../../shared/infra/logger/logger.mjs';
import { Product } from '../models/index.mjs';

class ProductRepository {
  async findById(id) {
    const product = await Product.findByPk(id);

    return product;
  }

  async findByEan(ean) {
    const product = await Product.findOne({
      where: {
        ean,
      },
    });

    return product;
  }

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

    logger.info(`creating new product ${product.id}`);

    return product;
  }

  async update(id, name, ean) {
    const product = await this.findById(id);

    await product.update({ name, ean });

    logger.info(`updating product ${id}`);

    return product;
  }

  async updateSupplier(id, supplier_id) {
    const product = await this.findById(id);

    await product.update({ supplier_id });

    logger.info(`update product supplier to ${supplier_id}`);

    return product;
  }

  async delete(id) {
    const product = await this.findById(id);

    logger.info(`delete product ${id}`);

    await product.destroy();
  }
}

export default new ProductRepository();
