import Sequelize from 'sequelize';
import sequelize from '../../config/db/dbconfig.mjs';
import Category from './Category.mjs';
import Product from './Product.mjs';

const ProductCategory = sequelize.define('product_category', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Category,
      key: 'id',
    },
  },
  product_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
  },
});

export default ProductCategory;
