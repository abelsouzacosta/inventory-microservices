import Sequelize from 'sequelize';
import sequelize from '../../config/db/dbconfig.mjs';

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

export default Product;
