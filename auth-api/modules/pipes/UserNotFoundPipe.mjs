import repository from '../repositories/UserRepository.mjs';
import HttpStatus from '../../shared/infra/constants/server/HttpStatus.mjs';
import ApplicationError from '../../shared/errors/ApplicationError.mjs';
import logger from '../../shared/infra/logger/Logger.mjs';

class UserNotFoundPipe {
  async execute(req, res, next) {
    const { email } = req.body;

    const userFound = await repository.findByEmail(email);

    if (!userFound) {
      logger.error(`user ${email} not found in database`);

      throw new ApplicationError(
        `User not found for email ${email}`,
        HttpStatus.NOT_FOUND,
      );
    }

    return next();
  }
}

export default new UserNotFoundPipe();
