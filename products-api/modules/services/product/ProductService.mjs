import logger from '../../../shared/infra/logger/logger.mjs';
import repository from '../../repositories/ProductRepository.mjs';

class ProductService {
  async list() {
    logger.info(`getting all products`);

    return repository.list();
  }

  async getOneProduct(id) {
    logger.info(`getting product ${id}`);

    return repository.findById(id);
  }

  async create(name, ean, supplier_id) {
    logger.info(`creating product`);

    return repository.create(name, ean, supplier_id);
  }

  async update(id, name, ean) {
    logger.info(`updating product ${id}`);

    return repository.update(id, name, ean);
  }

  async updateSupplier(id, supplier_id) {
    logger.info(`updating product ${id} supplier_id to ${supplier_id}`);

    return repository.updateSupplier(id, supplier_id);
  }

  async delete(id) {
    logger.info(`deleting product ${id}`);

    return repository.delete(id);
  }
}

export default new ProductService();
