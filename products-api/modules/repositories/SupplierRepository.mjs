import logger from '../../shared/infra/logger/logger.mjs';
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

    logger.info(`created a new supplier ${supplier.id}`);

    return supplier;
  }

  async update(id, name, phone) {
    const supplier = await Supplier.findByPk(id);

    supplier.update({ name, phone });

    logger.info(`updated supplier ${id}`);

    return supplier;
  }

  async delete(id) {
    const supplier = await Supplier.findByPk(id);

    logger.info(`deleted supplier ${id}`);

    supplier.destroy();
  }
}

export default new SupplierRepository();
