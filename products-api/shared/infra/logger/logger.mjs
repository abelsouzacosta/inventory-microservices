import { createLogger, format, transports } from 'winston';

class Logger {
  constructor() {
    this.logger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp({
          format: 'DD-MM-YYYY HH:mm:ss',
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json(),
      ),
      defaultMeta: { service: 'products-api' },
      transports: [
        new transports.Console({
          format: format.combine(format.colorize(), format.simple()),
        }),
      ],
    });
  }

  info(msg) {
    return this.logger.info(msg);
  }

  error(msg) {
    return this.logger.error(msg);
  }
}

export default new Logger();
