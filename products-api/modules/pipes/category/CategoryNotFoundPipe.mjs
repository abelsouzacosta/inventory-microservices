import repository from '../../repositories/CategoryRepository.mjs';
import HttpStatus from '../../../shared/infra/constants/server/HttpStatus.mjs';
import ApplicationError from '../../../shared/errors/ApplicationError.mjs';

class CategoryNotFoundPipe {
  async execute(req, res, next) {
    const { id } = req.params;

    const category = await repository.findById(parseInt(id, 10));

    if (!category)
      throw new ApplicationError(
        `Any category was found with id: ${id}`,
        HttpStatus.NOT_FOUND,
      );

    return next();
  }
}

export default new CategoryNotFoundPipe();
