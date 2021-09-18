import * as HapiSwagger from 'hapi-swagger';
import * as Package from '../../package.json';

const swaggerOptions: HapiSwagger.RegisterOptions = {
  info: {
    title: 'Kitstarter API Documentation',
    description: 'Kitstarter API (v1) using Typescript with Hapi and Docker.',
    version: Package.version,
  },
};

export default swaggerOptions;
