import 'express-async-errors';
import express from 'express';
import errorHandler from './shared/infra/errors/middlewares/ErrorHandler.mjs';
import router from './modules/routes/index.routes.mjs';

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

const { env } = process;
const PORT = env.PORT || 3030;

app.listen(PORT, () => console.info(`Server listening on port ${PORT}`));

export default app;
