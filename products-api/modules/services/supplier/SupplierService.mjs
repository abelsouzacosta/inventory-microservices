import repository from '../../repositories/SupplierRepository.mjs';

class SupplierService {
  async list() {
    return repository.list();
  }

  async getOneBy(id) {
    return repository.findById(id);
  }

  async create(name, phone) {
    return repository.create(name, phone);
  }
}

export default new SupplierService();
