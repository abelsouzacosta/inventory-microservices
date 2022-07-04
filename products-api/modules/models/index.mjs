import Category from './Category.mjs';
import Product from './Product.mjs';
import Supplier from './Supplier.mjs';

Category.belongsToMany(Product, {
  through: 'product_category',
  foreignKey: 'category_id',
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
});

export { Product, Category, Supplier };
