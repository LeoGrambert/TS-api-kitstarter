import { ResponseObject, ResponseToolkit } from '@hapi/hapi';
import { ApiError } from '../classes/ApiError';

const genericHandler = async (
  h: ResponseToolkit,
  handler: (params: Record<string, any>) => any,
  params: Record<string, any> = {},
  code = 200,
  type = 'application/json'
): Promise<ResponseObject> => {
  try {
    const res = await handler(params);
    return h.response(res).type(type).code(code);
  } catch (err: any) {
    let currentError = err;
    if (!(currentError instanceof ApiError)) {
      currentError = new ApiError(err.status, err.message);
      currentError.originalErr = err;
    }
    return h.response(currentError.display()).type('application/json').code(currentError.code);
  }
};

export { genericHandler };
