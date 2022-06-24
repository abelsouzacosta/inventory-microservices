import repository from '../repositories/UserRepository.mjs';

class UserService {
  async find() {
    const users = repository.find();

    return users;
  }
}

export default new UserService();
