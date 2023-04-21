export class HTTPError extends Error {
  constructor(message, http_code) {
    super(message);
    this.http_code = http_code;
  }
}

export class BadRequestError extends HTTPError {
  constructor(message) {
    super(message, 400);
  }
}

export class UnauthorizedError extends HTTPError {
  constructor(message) {
    super(message, 401);
  }
}
