import logger from '../../shared/infra/logger/logger.mjs';
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

    logger.log('info', `category created sucessfully with id ${category.id}`);

    return category;
  }

  async update(id, name) {
    const category = await Category.findByPk(id);

    await category.update({ name });

    logger.log('info', `category ${id} updated sucessfully`);

    return category;
  }

  async delete(id) {
    const category = await Category.findByPk(id);

    await category.destroy();

    logger.log('info', `category deleted sucessfully`);
  }
}

export default new CategoryRepository();
