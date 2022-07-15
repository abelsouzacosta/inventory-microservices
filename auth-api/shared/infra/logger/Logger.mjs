import { createLogger, format, transports } from 'winston';

class Logger {
  constructor() {
    this.logger = createLogger({
      level: 'info',
      format: format.combine(
        format.timestamp({
          format: 'DD/MM/YYYY HH:mm:ss',
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json(),
      ),
      defaultMeta: { service: 'auth-api' },
      transports: [
        new transports.Console({
          format: format.combine(format.colorize(), format.simple()),
        }),
      ],
    });
  }

  info(msg, ...meta) {
    this.logger.info(msg, meta);
  }

  error(msg, ...meta) {
    this.logger.error(msg, meta);
  }
}

export default new Logger();
