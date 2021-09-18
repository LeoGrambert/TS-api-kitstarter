import { ServerRoute } from '@hapi/hapi';
import { sayHello } from '../controllers/starterCtrl';

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
