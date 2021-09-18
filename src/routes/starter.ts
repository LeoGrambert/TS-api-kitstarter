import { Request, ResponseToolkit, ResponseObject, ServerRoute } from '@hapi/hapi';

async function sayHello(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
  const name: string = request.params.name || '👋';
  const response = h.response(`Hi ${name.charAt(0).toUpperCase() + name.slice(1)}`);
  response.type('text/plain');
  response.code(200);
  return response;
}

export const starterRoutes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/hello',
    handler: sayHello,
  },
  {
    method: 'GET',
    path: '/hello/{name}',
    handler: sayHello,
  },
];
