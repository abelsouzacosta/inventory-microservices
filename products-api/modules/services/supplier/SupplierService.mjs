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

  async update(id, name, phone) {
    return repository.update(id, name, phone);
  }

  async delete(id) {
    return repository.delete(id);
  }
}

export default new SupplierService();
