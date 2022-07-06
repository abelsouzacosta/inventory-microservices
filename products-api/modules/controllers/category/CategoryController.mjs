import service from '../../services/category/CategoryService.mjs';
import HttpStatus from '../../../shared/infra/constants/server/HttpStatus.mjs';

class CategoryController {
  async list(req, res) {
    const categories = await service.list();

    return res.status(HttpStatus.OK).json(categories);
  }

  async getCategory(req, res) {
    const { id } = req.params;

    const category = await service.getOneBy(parseInt(id, 10));

    return res.status(HttpStatus.OK).json(category);
  }

  async create(req, res) {
    const { name } = req.body;

    const category = await service.create(name);

    return res.status(HttpStatus.CREATED).json(category);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const category = await service.update(parseInt(id, 10), name);

    return res.status(HttpStatus.CREATED).json(category);
  }

  async delete(req, res) {
    const { id } = req.params;

    await service.delete(parseInt(id, 10));

    return res.status(HttpStatus.NO_CONTENT).send();
  }
}

export default new CategoryController();