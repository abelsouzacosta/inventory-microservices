import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('localhost', 'docker', 'docker', {
  dialect: 'postgres',
  database: 'auth-db',
  quoteIdentifiers: true,
  define: {
    syncOnAssociation: true,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.info(`Connection stabilished for postgres auth-db`);
  })
  .catch((err) => {
    console.error(`Unable to connect to the database`);
    console.error(err);
  });

export default sequelize;
