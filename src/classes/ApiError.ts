import logger from '../helpers/logger';

export class ApiError extends Error {
  private _originalErr: Error;
  private _code: number;
  private _message: string;

  public constructor(code = 500, message = 'Unexpected error') {
    super();
    this._code = code;
    this._message = message;
  }

  get originalErr(): Error {
    return this._originalErr;
  }

  set originalErr(originalErr: Error) {
    this._originalErr = originalErr;
  }

  get code(): number {
    return this._code;
  }

  set code(code: number) {
    this._code = code;
  }

  get message(): string {
    return this._message;
  }

  set message(message: string) {
    this._message = message;
  }

  public display() {
    const code = this._code;
    const message = this._message;
    const originalErr = this._originalErr;
    const apiError = {
      error: {
        code,
        message,
        originalErr,
      },
    };
    logger.error(`💥💥 ${apiError} 💥💥`);
    return apiError;
  }
}
