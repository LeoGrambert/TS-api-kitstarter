/* eslint-disable @typescript-eslint/no-explicit-any */
import { convertFromDirectory } from 'joi-to-typescript';
import { ApiError } from '../classes/ApiError';
import logger from './logger';

async function types(): Promise<void> {
  logger.info('🌴 Running joi-to-typescript...');

  try {
    const result = await convertFromDirectory({
      schemaDirectory: './src/schemas',
      typeOutputDirectory: './src/interfaces',
      debug: process.env.NODE_ENV === 'development',
    });
    logger.info(result ? '🥂 Completed joi-to-typescript' : '😱 Failed to run joi-to-typescript');
  } catch (err: any) {
    let currentError = err;
    if (!(currentError instanceof ApiError)) {
      currentError = new ApiError(err.status, err.message);
      currentError.originalErr = err;
    }
    throw currentError;
  }
}

types();
