import { ServerRoute } from '@hapi/hapi';
import { sayHello } from '../controllers/starterCtrl';
import Joi from 'joi';
import { StarterSchema } from '../schemas/StarterSchema';

export const starterRoutes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/hello',
    options: {
      description: 'Route test for kitstarter',
      notes: 'Say hello to a stranger',
      tags: ['api', 'starter'],
      handler: sayHello,
      response: {
        schema: Joi.array().items(StarterSchema),
        failAction: 'log',
      },
    },
  },
  {
    method: 'GET',
    path: '/hello/{name}',
    options: {
      description: 'Route test for kitstarter',
      notes: 'Say hello to someone',
      tags: ['api', 'starter'],
      handler: sayHello,
      response: {
        schema: Joi.array().items(StarterSchema),
        failAction: 'log',
      },
    },
  },
];
