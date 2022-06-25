import ApplicationError from '../../../errors/ApplicationError.mjs';

// eslint-disable-next-line
export default (error, req, res, next) => {
  if (error instanceof ApplicationError) {
    return res.status(error.status).json({
      message: error.message,
      status: error.status,
      stack: error.stack,
    });
  }

  return res.status(500).json({
    message: error.message,
  });
};
