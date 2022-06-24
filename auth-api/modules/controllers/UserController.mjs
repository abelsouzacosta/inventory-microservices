import service from '../services/UserService.mjs';

class UserController {
  async list(req, res) {
    const users = await service.find();

    return res.status(200).json(users);
  }

  async create(req, res) {
    const { name, email, password } = req.body;

    const userCreated = await service.create(name, email, password);

    return res.status(201).json(userCreated);
  }
}

export default new UserController();
