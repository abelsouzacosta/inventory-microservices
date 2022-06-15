import express from 'express';

const app = express();

app.use(express.json());

const { env } = process;
const PORT = env.PORT || 8083;

app.get('/', (req, res) => res.redirect('/api/status'));

app.get('/api/status', (req, res) =>
  res.status(200).json({
    service: 'Sales Service',
    status: 'up',
    httpStatus: 200,
  }),
);

app.listen(PORT, () => console.info(`Server listening on PORT ${PORT}`));

export default app;
