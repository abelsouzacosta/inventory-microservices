import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(
  process.env.POSTGRES_DATABASE,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    dialect: process.env.DIALECT,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    quoteIdentifiers: true,
    define: {
      syncOnAssociation: true,
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    },
    pool: {
      acquire: 60000,
    },
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.info(`Connection stabilished for postgres product-db`);
  })
  .catch((err) => {
    console.error(`Unable to connect the database product-db`);
    console.error(err);
  });

export default sequelize;
