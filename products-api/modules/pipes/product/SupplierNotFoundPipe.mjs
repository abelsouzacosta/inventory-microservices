import repository from '../../repositories/SupplierRepository.mjs';
import HttpStatus from '../../../shared/infra/constants/server/HttpStatus.mjs';
import ApplicationError from '../../../shared/errors/ApplicationError.mjs';

class SupplierNotFoundPipe {
  async execute(req, res, next) {
    const { supplier_id } = req.body;

    const supplierExists = await repository.findById(supplier_id);

    if (!supplierExists)
      throw new ApplicationError(
        `Supplier not found with id ${supplier_id}`,
        HttpStatus.NOT_FOUND,
      );

    return next();
  }
}

export default new SupplierNotFoundPipe();
