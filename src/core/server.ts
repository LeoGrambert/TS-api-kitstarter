'use strict';

import * as dotenv from 'dotenv';
dotenv.config();
import Hapi from "@hapi/hapi";
import { Request, Server } from "@hapi/hapi";
import { starterRoutes } from "../routes/starter";

export let server: Server;

export const init = async function(): Promise<Server> {
    server = Hapi.server({
        port: process.env.PORT || 5000,
        host: '0.0.0.0'
    });

    server.realm.modifiers.route.prefix = '/api/v1';

    server.route(starterRoutes);

    return server;
};

export const start = async function (): Promise<void> {
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
    return server.start();
};

process.on('unhandledRejection', (err) => {
    console.error("unhandledRejection");
    console.error(err);
    process.exit(1);
});