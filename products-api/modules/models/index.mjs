import Category from './Category.mjs';
import Product from './Product.mjs';
import Supplier from './Supplier.mjs';
import ProductCategory from './ProductCategory.mjs';

Category.belongsToMany(Product, {
  through: 'product_category',
  foreignKey: 'category_id',
  onDelete: 'SET NULL',
  onUpdate: 'SET NULL',
});

Supplier.hasMany(Product, {
  foreignKey: 'supplier_id',
});

Product.belongsTo(Supplier, {
  foreignKey: 'supplier_id',
});

Product.belongsToMany(Category, {
  through: 'product_category',
  foreignKey: 'product_id',
  onDelete: 'SET NULL',
  onUpdate: 'SET NULL',
});

export { Product, Category, Supplier, ProductCategory };
