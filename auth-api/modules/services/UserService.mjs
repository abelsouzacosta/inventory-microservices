import { hash, compare } from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import repository from '../repositories/UserRepository.mjs';
import ApplicationError from '../../shared/errors/ApplicationError.mjs';
import HttpStatus from '../../shared/infra/constants/server/HttpStatus.mjs';
import 'dotenv/config';

class UserService {
  generateToken(user) {
    const token = jsonwebtoken.sign({}, process.env.SECRET, {
      expiresIn: 86400,
      subject: toString(user.id),
    });

    return token;
  }

  async find() {
    const users = repository.find();

    return users;
  }

  async create(name, email, password) {
    const saltNumber = 10;

    const hashedPassword = await hash(password, saltNumber);

    const user = await repository.create(name, email, hashedPassword);

    return user;
  }

  async authorizeUser(email, password) {
    const user = await repository.findByEmail(email);

    const isValidPassword = compare(password, user.password);

    if (!isValidPassword)
      throw new ApplicationError(`Invalid Password`, HttpStatus.UNAUTHORIZED);

    const generatedToken = this.generateToken(user);

    return generatedToken;
  }
}

export default new UserService();
