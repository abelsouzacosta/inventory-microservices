import repository from '../../repositories/SupplierRepository.mjs';

class SupplierService {
  async list() {
    return repository.list();
  }
}

export default new SupplierService();
