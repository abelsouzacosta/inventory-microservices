import service from '../../services/category/CategoryService.mjs';

class CategoryController {
  async list(req, res) {
    const categories = await service.list();

    return res.status(200).json(categories);
  }

  async getCategory(req, res) {
    const { id } = req.params;

    const category = await service.getOneBy(parseInt(id, 10));

    return res.status(200).json(category);
  }

  async create(req, res) {
    const { name } = req.body;

    const category = await service.create(name);

    return res.status(201).json(category);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const category = await service.update(parseInt(id, 10), name);

    return res.status(201).json(category);
  }
}

export default new CategoryController();
