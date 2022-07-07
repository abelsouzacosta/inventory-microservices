import repository from '../../repositories/ProductRepository.mjs';

class ProductService {
  async list() {
    return repository.list();
  }
}

export default new ProductService();
