import repository from '../../repositories/SupplierRepository.mjs';
import HttpStatus from '../../../shared/infra/constants/server/HttpStatus.mjs';
import ApplicationError from '../../../shared/errors/ApplicationError.mjs';
import logger from '../../../shared/infra/logger/logger.mjs';

class SupplierNotFoundPipe {
  async execute(req, res, next) {
    const id = req.params.id ? req.params.id : req.body.supplier_id;

    const supplierExists = await repository.findById(id);

    if (!supplierExists) {
      logger.error(`supplier ${id} not found`);

      throw new ApplicationError(
        `Supplier not found with id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return next();
  }
}

export default new SupplierNotFoundPipe();
