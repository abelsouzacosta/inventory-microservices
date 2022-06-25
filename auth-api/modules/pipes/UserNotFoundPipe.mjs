import repository from '../repositories/UserRepository.mjs';
import HttpStatus from '../../shared/infra/constants/server/HttpStatus.mjs';
import ApplicationError from '../../shared/errors/ApplicationError.mjs';

class UserNotFoundPipe {
  async execute(req, res, next) {
    const { email } = req.body;

    const userFound = await repository.findByEmail(email);

    if (!userFound)
      throw new ApplicationError(
        `User not found for email ${email}`,
        HttpStatus.NOT_FOUND,
      );

    return next();
  }
}

export default new UserNotFoundPipe();
