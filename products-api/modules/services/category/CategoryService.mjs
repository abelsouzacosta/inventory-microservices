import logger from '../../../shared/infra/logger/logger.mjs';
import repository from '../../repositories/CategoryRepository.mjs';

class CategoryService {
  async list() {
    const categories = await repository.list();

    logger.info(`getting all categories`);

    return categories;
  }

  async getOneBy(id) {
    const category = await repository.findById(id);

    logger.info(`getting category ${id}`);

    return category;
  }

  async create(name) {
    const category = await repository.create(name);

    logger.info(`creating category`);

    return category;
  }

  async update(id, name) {
    const category = await repository.update(id, name);

    logger.info(`updated category ${id}`);

    return category;
  }

  async delete(id) {
    await repository.delete(id);

    logger.info(`deleted category ${id}`);
  }
}

export default new CategoryService();
