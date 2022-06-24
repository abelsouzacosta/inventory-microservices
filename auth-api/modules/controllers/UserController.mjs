import service from '../services/UserService.mjs';

class UserController {
  async list(req, res) {
    const users = await service.find();

    return res.status(200).json(users);
  }
}

export default new UserController();
