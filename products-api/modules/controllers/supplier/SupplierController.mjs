import HttpStatus from '../../../shared/infra/constants/server/HttpStatus.mjs';
import service from '../../services/supplier/SupplierService.mjs';

class SupplierController {
  async list(req, res) {
    const suppliers = await service.list();

    return res.status(HttpStatus.OK).json(suppliers);
  }
}

export default new SupplierController();
