import { Supplier } from '../models/index.mjs';

class SupplierRepository {
  async list() {
    const suppliers = await Supplier.findAll();

    return suppliers;
  }

  async findById(id) {
    const supplier = await Supplier.findByPk(id);

    return supplier;
  }

  async create(name, phone) {
    const supplier = await Supplier.create({
      name,
      phone,
    });

    return supplier;
  }

  async update(id, name, phone) {
    const supplier = await Supplier.findByPk(id);

    supplier.update({ name, phone });

    return supplier;
  }

  async delete(id) {
    const supplier = await Supplier.findByPk(id);

    supplier.destroy();
  }
}

export default new SupplierRepository();
