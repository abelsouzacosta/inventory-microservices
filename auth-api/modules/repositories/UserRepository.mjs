import User from '../models/user/User.mjs';

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
    });

    return user;
  }

  async create(name, email, password) {
    const newUser = await User.create({
      name,
      email,
      password,
    });

    return newUser;
  }
}

export default new UserRepository();
