import express from 'express';

const app = express();

app.use(express.json());

const { env } = process;
const PORT = env.PORT || 3030;

app.get('/', (req, res) => res.redirect('/api/status'));

app.get('/api/status', (req, res) =>
  res.status(200).json({
    service: 'Products Service',
    status: 'up',
    httpStatus: 200,
  }),
);

app.listen(PORT, () => console.info(`Server listening on port ${PORT}`));

export default app;
