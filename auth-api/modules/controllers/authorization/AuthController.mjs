import HttpStatus from '../../../shared/infra/constants/server/HttpStatus.mjs';
import service from '../../services/UserService.mjs';

class AuthController {
  async authorize(req, res) {
    const { email, password } = req.body;

    const token = await service.authorizeUser(email, password);

    return res.status(HttpStatus.OK).json({
      token,
    });
  }
}

export default new AuthController();
