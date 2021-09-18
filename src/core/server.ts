'use strict';

import * as dotenv from 'dotenv';
dotenv.config();
import Hapi from '@hapi/hapi';
import { Server } from '@hapi/hapi';
import { starterRoutes } from '../routes/starter';
import logger from '../helpers/logger';
import connection from './connection';

export let server: Server;

export const init = async function (): Promise<Server> {
  if (process.env.TYPEORM_SHOP_NAME && process.env.TYPEORM_SHOP_NAME !== '') {
    await connection();
  }

  server = Hapi.server({
    port: process.env.PORT || 5000,
    host: process.env.HOST || '0.0.0.0',
  });

  server.realm.modifiers.route.prefix = '/api/v1';

  server.route(starterRoutes);

  return server;
};

export const start = async function (): Promise<void> {
  logger.info(`Listening on ${server.settings.host}:${server.settings.port}`);
  return server.start();
};

process.on('unhandledRejection', (err) => {
  logger.error('unhandledRejection');
  logger.error(err);
  process.exit(1);
});
