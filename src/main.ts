import { init } from './core/server';
import { ApiError } from './classes/ApiError';

(async () => {
  try {
    const server = await init();
    server.start();
  } catch (err: any) {
    let currentError = err;
    if (!(currentError instanceof ApiError)) {
      currentError = new ApiError(503, 'Server start failure');
      currentError.originalErr = err;
    }
    currentError.display();
  }
})();
