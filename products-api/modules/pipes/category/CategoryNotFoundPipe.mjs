import repository from '../../repositories/CategoryRepository.mjs';
import HttpStatus from '../../../shared/infra/constants/server/HttpStatus.mjs';
import ApplicationError from '../../../shared/errors/ApplicationError.mjs';
import logger from '../../../shared/infra/logger/logger.mjs';

class CategoryNotFoundPipe {
  async execute(req, res, next) {
    const { id } = req.params;

    const category = await repository.findById(parseInt(id, 10));

    if (!category) {
      logger.error(`category ${id} not found`);

      throw new ApplicationError(
        `Any category was found with id: ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }

    return next();
  }
}

export default new CategoryNotFoundPipe();
