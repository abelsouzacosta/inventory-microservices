import repository from '../repositories/UserRepository.mjs';
import ApplicationError from '../../shared/errors/ApplicationError.mjs';
import HttpStatus from '../../shared/infra/constants/server/HttpStatus.mjs';
import logger from '../../shared/infra/logger/Logger.mjs';

class EmailAlreadyExistsPipe {
  async execute(req, res, next) {
    const { email } = req.body;

    const emailAlreadyExists = await repository.findByEmail(email);

    if (emailAlreadyExists) {
      logger.error(`email already takne by another instance`);

      throw new ApplicationError(`Email already taken`, HttpStatus.CONFLICT);
    }

    return next();
  }
}

export default new EmailAlreadyExistsPipe();
