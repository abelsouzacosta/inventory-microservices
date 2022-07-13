import logger from '../../../shared/infra/logger/logger.mjs';
import repository from '../../repositories/CategoryRepository.mjs';

class CategoryService {
  async list() {
    const categories = await repository.list();

    logger.log('info', 'getting all categories');

    return categories;
  }

  async getOneBy(id) {
    const category = await repository.findById(id);

    logger.log('info', `getting category with id: ${id}`);

    return category;
  }

  async create(name) {
    const category = await repository.create(name);

    logger.log('info', `trying to create new category`);

    return category;
  }

  async update(id, name) {
    const category = await repository.update(id, name);

    logger.log('info', `trying to update category ${id}`);

    return category;
  }

  async delete(id) {
    await repository.delete(id);

    logger.log('info', `tryning to delete category ${id}`);
  }
}

export default new CategoryService();
