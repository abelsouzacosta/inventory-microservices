import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(
  process.env.POSTGRES_DATABASE,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    dialect: process.env.DIALECT,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    quoteIdentifiers: true,
    define: {
      syncOnAssociation: true,
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    },
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.info(`Connection stabilished for postgres auth_db`);
  })
  .catch((err) => {
    console.error(`Unable to connect to the database`);
    console.error(err);
  });

export default sequelize;
