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

    supplier.name = name || supplier.name;
    supplier.phone = phone || supplier.phone;

    supplier.save();

    return supplier;
  }
}

export default new SupplierRepository();
