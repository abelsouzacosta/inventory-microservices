import repository from '../../repositories/ProductRepository.mjs';
import ApplicationError from '../../../shared/errors/ApplicationError.mjs';
import HttpStatus from '../../../shared/infra/constants/server/HttpStatus.mjs';
import logger from '../../../shared/infra/logger/logger.mjs';

class ProductNotFoundPipe {
  async execute(req, res, next) {
    const { id } = req.params;

    const productFound = await repository.findById(id);

    if (!productFound) {
      logger.error(`product ${id} not found`);

      throw new ApplicationError(
        `Product not found with id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }

    return next();
  }
}

export default new ProductNotFoundPipe();
