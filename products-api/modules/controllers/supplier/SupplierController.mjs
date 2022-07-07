import HttpStatus from '../../../shared/infra/constants/server/HttpStatus.mjs';
import service from '../../services/supplier/SupplierService.mjs';

class SupplierController {
  async list(req, res) {
    const suppliers = await service.list();

    return res.status(HttpStatus.OK).json(suppliers);
  }

  async getSupplier(req, res) {
    const { id } = req.params;

    const supplier = await service.getOneBy(id);

    return res.status(HttpStatus.OK).json(supplier);
  }

  async create(req, res) {
    const { name, phone } = req.body;

    const supplier = await service.create(name, phone);

    return res.status(HttpStatus.CREATED).json(supplier);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, phone } = req.body;

    const supplier = await service.update(id, name, phone);

    return res.status(HttpStatus.CREATED).json(supplier);
  }
}

export default new SupplierController();
