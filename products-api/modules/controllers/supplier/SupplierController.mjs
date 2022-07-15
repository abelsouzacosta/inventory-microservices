import HttpStatus from '../../../shared/infra/constants/server/HttpStatus.mjs';
import service from '../../services/supplier/SupplierService.mjs';
import logger from '../../../shared/infra/logger/logger.mjs';

class SupplierController {
  async list(req, res) {
    const suppliers = await service.list();

    logger.info(`getting all suppliers`);

    return res.status(HttpStatus.OK).json(suppliers);
  }

  async getSupplier(req, res) {
    const { id } = req.params;

    const supplier = await service.getOneBy(id);

    logger.info(`getting supplier ${id}`);

    return res.status(HttpStatus.OK).json(supplier);
  }

  async create(req, res) {
    const { name, phone } = req.body;

    const supplier = await service.create(name, phone);

    logger.info(`creating a new supplier`);

    return res.status(HttpStatus.CREATED).json(supplier);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, phone } = req.body;

    logger.info(`updating supplier ${id}`);

    const supplier = await service.update(id, name, phone);

    return res.status(HttpStatus.CREATED).json(supplier);
  }

  async delete(req, res) {
    const { id } = req.params;

    logger.info(`deleting supplier ${id}`);

    await service.delete(id);

    return res.status(HttpStatus.NO_CONTENT).send();
  }
}

export default new SupplierController();
