import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('product-db', 'docker', 'docker', {
  dialect: 'postgres',
  host: 'product-db',
  database: 'product-db',
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
});

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
