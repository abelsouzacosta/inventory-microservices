import Sequelize from 'sequelize';
import sequelize from '../../config/db/dbconfig.mjs';
import Category from './Category.mjs';
import Supplier from './Supplier.mjs';

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ean: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

Product.hasOne(Supplier);

Product.belongsTo(Category);

export default Product;
