import ApplicationError from '../../../shared/errors/ApplicationError.mjs';
import HttpStatus from '../../../shared/infra/constants/server/HttpStatus.mjs';
import logger from '../../../shared/infra/logger/logger.mjs';
import repository from '../../repositories/CategoryRepository.mjs';

class CategoryNameAlreadyTakenPipe {
  async execute(req, res, next) {
    const { id } = req.params;
    const { name } = req.body;

    const categoryFound = await repository.findById(id);
    const nameAlreadyExists = await repository.findByName(name);

    if (nameAlreadyExists && categoryFound.id !== nameAlreadyExists.id) {
      logger.error(
        `${HttpStatus.CONFLICT} - category name ${name} already taken`,
      );

      throw new ApplicationError(
        `Name ${name} is already taken - instance ${nameAlreadyExists.id}`,
        HttpStatus.CONFLICT,
      );
    }

    return next();
  }
}

export default new CategoryNameAlreadyTakenPipe();
