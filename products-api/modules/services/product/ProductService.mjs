import repository from '../../repositories/ProductRepository.mjs';

class ProductService {
  async list() {
    return repository.list();
  }

  async create(name, ean, supplier_id) {
    return repository.create(name, ean, supplier_id);
  }

  async update(id, name, ean) {
    return repository.update(id, name, ean);
  }

  async updateSupplier(id, supplier_id) {
    return repository.updateSupplier(id, supplier_id);
  }
}

export default new ProductService();
