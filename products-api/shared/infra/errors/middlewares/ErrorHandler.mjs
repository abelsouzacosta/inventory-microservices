import ApplicationError from '../../../errors/ApplicationError.mjs';
import HttpStatus from '../../constants/server/HttpStatus.mjs';

// eslint-disable-next-line
export default (error, req, res, next) => {
  if (error instanceof ApplicationError) {
    return res.status(error.status).json({
      message: error.message,
      status: error.status,
      stack: error.stack,
    });
  }

  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    message: error.message,
  });
};
