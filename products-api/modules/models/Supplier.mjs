import Sequelize from 'sequelize';
import sequelize from '../../config/db/dbconfig.mjs';

const Supplier = sequelize.define('supplier', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Supplier;
