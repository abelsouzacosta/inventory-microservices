import User from '../models/user/User.mjs';

class UserRepository {
  async find() {
    const users = await User.findAll();

    return users;
  }
}

export default new UserRepository();
