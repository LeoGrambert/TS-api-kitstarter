import { IStarter } from '../interfaces';

const getMessage = (params: Record<string, any>): IStarter => {
  return {
    message: `Hi ${params.name.charAt(0).toUpperCase() + params.name.slice(1)}`,
  };
};

export { getMessage };
