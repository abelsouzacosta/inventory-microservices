import repository from '../repositories/UserRepository.mjs';
import ApplicationError from '../../shared/errors/ApplicationError.mjs';

class EmailAlreadyExistsPipe {
  async execute(req, res, next) {
    const { email } = req.body;

    const emailAlreadyExists = await repository.findByEmail(email);

    if (emailAlreadyExists)
      throw new ApplicationError(`Email already taken`, 404);

    return next();
  }
}

export default new EmailAlreadyExistsPipe();
