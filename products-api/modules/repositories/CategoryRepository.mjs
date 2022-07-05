import Category from '../models/Category.mjs';

class CategoryRepository {
  async create(name) {
    const category = await Category.create({
      name,
    });

    return category;
  }
}

export default CategoryRepository;
