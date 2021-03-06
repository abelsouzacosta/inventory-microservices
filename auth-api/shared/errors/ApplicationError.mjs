export default class ApplicationError extends Error {
  constructor(message, status) {
    super(message, status);
    this.message = message;
    this.status = status;
    this.stack = new Error().stack;
    this.name = this.constructor.name;
  }
}
