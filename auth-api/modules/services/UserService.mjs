import { hash, compare } from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import repository from '../repositories/UserRepository.mjs';
import ApplicationError from '../../shared/errors/ApplicationError.mjs';
import HttpStatus from '../../shared/infra/constants/server/HttpStatus.mjs';
import logger from '../../shared/infra/logger/Logger.mjs';
import 'dotenv/config';

class UserService {
  #saltNumber = 10;

  #tokenExpirationTimeInSeconds = 86400;

  generateToken(user) {
    const token = jsonwebtoken.sign({}, process.env.SECRET, {
      expiresIn: this.#tokenExpirationTimeInSeconds,
      subject: toString(user.id),
    });

    return token;
  }

  verifyUndefinedOrNullPassword(password) {
    if (password === null || undefined)
      throw new ApplicationError(`User not found`, HttpStatus.FORBIDDEN);
  }

  comparePasswordWithHash(user, password) {
    const hashedPassword = user.password;

    const passowordIsValid = compare(password, hashedPassword);

    if (!passowordIsValid)
      throw new ApplicationError(`Invalid Password`, HttpStatus.UNAUTHORIZED);
  }

  checkIfPasswordIsValid(user, password) {
    this.verifyUndefinedOrNullPassword(password);
    this.comparePasswordWithHash(user, password);
  }

  async generateHashedPassword(password) {
    const hashedPassword = await hash(password, this.#saltNumber);

    return hashedPassword;
  }

  async find() {
    const users = repository.find();

    logger.info(`getting users`);

    return users;
  }

  async create(name, email, password) {
    const hashedPassword = await this.generateHashedPassword(password);

    const user = await repository.create(name, email, hashedPassword);

    logger.info(`creating user`);

    return user;
  }

  async authorizeUser(email, password) {
    const user = await repository.findByEmail(email);

    this.checkIfPasswordIsValid(user, password);

    const generatedToken = this.generateToken(user);

    logger.info(`user authorized, token generated`);

    return generatedToken;
  }
}

export default new UserService();
