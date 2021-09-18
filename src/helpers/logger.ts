import { Logger } from 'tslog';

const logger: Logger = new Logger({
  exposeErrorCodeFrame: false,
  displayFilePath: process.env.NODE_ENV === 'development' ? 'displayAll' : 'hidden',
  minLevel: process.env.NODE_ENV === 'development' ? 'silly' : 'error',
  exposeStack: process.env.NODE_ENV === 'development',
});

export default logger;
