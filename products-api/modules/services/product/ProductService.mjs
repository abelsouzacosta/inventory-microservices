import repository from '../../repositories/ProductRepository.mjs';

class ProductService {
  async list() {
    return repository.list();
  }

  async create(name, ean, supplier_id) {
    return repository.create(name, ean, supplier_id);
  }
}

export default new ProductService();
