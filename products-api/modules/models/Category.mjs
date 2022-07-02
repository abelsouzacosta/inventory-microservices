import Sequelize from 'sequelize';
import sequelize from '../../config/db/dbconfig.mjs';

const Category = sequelize.define('category', {
  id: {
    type: Sequelize.INT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

export default Category;
