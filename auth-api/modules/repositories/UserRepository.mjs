import User from '../models/user/User.mjs';
import logger from '../../shared/infra/logger/Logger.mjs';

class UserRepository {
  async find() {
    const users = await User.findAll();

    return users;
  }

  async findByEmail(email) {
    const user = await User.findOne({
      where: {
        email,
      },
      attributes: ['email', 'password'],
    });

    return user;
  }

  async create(name, email, password) {
    const newUser = await User.create({
      name,
      email,
      password,
    });

    logger.info(`created user`);

    return { id: newUser.id, name: newUser.name, email: newUser.email };
  }
}

export default new UserRepository();
