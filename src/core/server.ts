'use strict';

import * as dotenv from 'dotenv';
dotenv.config();
import Hapi from '@hapi/hapi';
import { Server } from '@hapi/hapi';
import { starterRoutes } from '../routes/starter';
import logger from '../helpers/logger';
import connection from './connection';
import { ApiError } from '../classes/ApiError';
import plugins from './plugins';

export let server: Server;

export const init = async function (): Promise<Server> {
  if (process.env.TYPEORM_SHOP_NAME && process.env.TYPEORM_SHOP_NAME !== '') {
    await connection();
  }

  server = Hapi.server({
    port: process.env.PORT || 5000,
    host: process.env.HOST || '0.0.0.0',
    routes: {
      cors: {
        origin: process.env.ALLOWED_CORS?.split(','),
        credentials: true,
      },
      cache:
        process.env.MODE_ENV === 'production'
          ? {
              expiresIn: (process.env.CACHE_EXPIRES_IN as unknown as number) || 1800000,
              privacy: 'private',
            }
          : {},
    },
  });

  server.realm.modifiers.route.prefix = '/api/v1';

  await server.register(plugins);

  server.route(starterRoutes);

  return server;
};

export const start = async function (): Promise<void> {
  logger.info(`✨✨ Listening on ${server.settings.host}:${server.settings.port} ✨✨`);
  return server.start();
};

process.on('unhandledRejection', (err: Error) => {
  const apiError = new ApiError(503, 'unhandledRejection');
  apiError.originalErr = err;
  apiError.display();
});
