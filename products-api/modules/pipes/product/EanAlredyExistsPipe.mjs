import repository from '../../repositories/ProductRepository.mjs';
import ApplicationError from '../../../shared/errors/ApplicationError.mjs';
import HttpStatus from '../../../shared/infra/constants/server/HttpStatus.mjs';
import logger from '../../../shared/infra/logger/logger.mjs';

class EanAlreadyExistsPipe {
  async execute(req, res, next) {
    const { ean } = req.body;

    const eanAlreadyExists = await repository.findByEan(ean);

    if (eanAlreadyExists) {
      logger.error(`ean ${ean} already exists in the database`);

      throw new ApplicationError(
        `Ean ${ean} alredy exists in the database`,
        HttpStatus.CONFLICT,
      );
    }
    return next();
  }
}

export default new EanAlreadyExistsPipe();
