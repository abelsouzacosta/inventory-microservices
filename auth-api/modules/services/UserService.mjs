import bcrypt from 'bcrypt';
import repository from '../repositories/UserRepository.mjs';

class UserService {
  async find() {
    const users = repository.find();

    return users;
  }

  async create(name, email, password) {
    const saltNumber = 10;

    const hashedPassword = await bcrypt.hash(password, saltNumber);

    const user = await repository.create(name, email, hashedPassword);

    return user;
  }
}

export default new UserService();
