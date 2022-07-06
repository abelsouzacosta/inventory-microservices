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

  async update(id, name) {
    const category = await Category.findByPk(id);

    await category.update({ name });

    return category;
  }

  async delete(id) {
    const category = await Category.findByPk(id);

    await category.destroy();
  }
}

export default new CategoryRepository();
