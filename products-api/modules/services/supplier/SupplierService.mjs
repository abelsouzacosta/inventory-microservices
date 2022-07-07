import repository from '../../repositories/SupplierRepository.mjs';

class SupplierService {
  async list() {
    return repository.list();
  }

  async create(name, phone) {
    return repository.create(name, phone);
  }
}

export default new SupplierService();
