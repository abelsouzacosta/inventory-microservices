import { Supplier } from '../models/index.mjs';

class SupplierRepository {
  async list() {
    const suppliers = await Supplier.findAll();

    return suppliers;
  }

  async create(name, phone) {
    const supplier = await Supplier.create({
      name,
      phone,
    });

    return supplier;
  }
}

export default new SupplierRepository();
