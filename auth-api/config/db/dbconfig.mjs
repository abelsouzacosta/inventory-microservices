import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('auth_db', 'docker', 'docker', {
  dialect: 'postgres',
  database: 'auth-db',
  host: 'localhost',
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
    console.info(`Connection stabilished for postgres auth_db`);
  })
  .catch((err) => {
    console.error(`Unable to connect to the database`);
    console.error(err);
  });

export default sequelize;
