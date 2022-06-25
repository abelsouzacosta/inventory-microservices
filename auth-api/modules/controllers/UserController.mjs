import HttpStatus from '../../shared/infra/constants/server/HttpStatus.mjs';
import service from '../services/UserService.mjs';

class UserController {
  async list(req, res) {
    const users = await service.find();

    return res.status(HttpStatus.OK).json(users);
  }

  async create(req, res) {
    const { name, email, password } = req.body;

    const userCreated = await service.create(name, email, password);

    return res.status(HttpStatus.CREATED).json(userCreated);
  }
}

export default new UserController();
