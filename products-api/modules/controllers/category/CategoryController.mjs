import service from '../../services/category/CategoryService.mjs';

class CategoryController {
  async create(req, res) {
    const { name } = req.body;

    const category = await service.create(name);

    return res.status(201).json(category);
  }
}

export default new CategoryController();
