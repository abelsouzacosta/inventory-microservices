import repository from '../../repositories/CategoryRepository.mjs';

class CategoryService {
  async list() {
    const categories = await repository.list();

    return categories;
  }

  async getOneBy(id) {
    const category = await repository.findById(id);

    return category;
  }

  async create(name) {
    const category = await repository.create(name);

    return category;
  }

  async update(id, name) {
    const category = await repository.update(id, name);

    return category;
  }
}

export default new CategoryService();
