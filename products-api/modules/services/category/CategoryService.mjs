import repository from '../../repositories/CategoryRepository.mjs';

class CategoryService {
  async create(name) {
    const category = await repository.create(name);

    return category;
  }
}

export default new CategoryService();
