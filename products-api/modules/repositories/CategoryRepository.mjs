import Category from '../models/Category.mjs';

class CategoryRepository {
  async list() {
    const categories = await Category.findAll();

    return categories;
  }

  async findById(id) {
    const category = await Category.findByPk(id);

    return category;
  }

  async create(name) {
    const category = await Category.create({
      name,
    });

    return category;
  }
}

export default new CategoryRepository();
