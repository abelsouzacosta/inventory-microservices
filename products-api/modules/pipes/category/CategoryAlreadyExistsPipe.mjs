import logger from '../../../shared/infra/logger/logger.mjs';
import repository from '../../repositories/CategoryRepository.mjs';
import ApplicationError from '../../../shared/errors/ApplicationError.mjs';
import HttpStatus from '../../../shared/infra/constants/server/HttpStatus.mjs';

class CategoryAlreadyExistsPipe {
  async execute(req, res, next) {
    const { name } = req.body;

    const categoryExists = await repository.findByName(name);

    if (categoryExists) {
      logger.error(`category ${name} already exists - category create`);

      throw new ApplicationError(
        `Category already exists`,
        HttpStatus.CONFLICT,
      );
    }

    return next();
  }
}

export default new CategoryAlreadyExistsPipe();
