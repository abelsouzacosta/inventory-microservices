import express from 'express';
import createInitialData from './config/db/initialdata.mjs';

const app = express();

app.use(express.json());

const { env } = process;
const PORT = env.PORT || 8080;

app.get('/', (req, res) => res.redirect('/api/status'));

app.get('/api/status', (req, res) =>
  res.status(200).json({
    service: 'Auth Service',
    status: 'up',
    httpStatus: 200,
  }),
);

app.get('/init', async (req, res) => {
  createInitialData()
    .then(() => {
      console.log(`Initial data of user was created`);

      return res.json({
        message: 'Initial Data of User was created',
      });
    })
    .catch((err) => {
      console.error(err);

      return res.json({
        message: 'There was an error trying to create the initial data of user',
      });
    });
});

app.listen(PORT, () => console.info(`Server listening on port ${PORT}`));

export default app;
