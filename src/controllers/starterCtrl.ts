import { Request, ResponseToolkit, ResponseObject } from '@hapi/hapi';
import { genericHandler } from '../helpers/genericHandler';
import { getMessage } from '../services/starter';

const sayHello = async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
  const params: Record<string, string> = {
    name: request.params.name || '👋',
  };
  return genericHandler(h, getMessage, params, 200);
};

export { sayHello };
