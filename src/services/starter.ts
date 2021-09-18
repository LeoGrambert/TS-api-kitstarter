import { Request } from '@hapi/hapi';

const getMessage = (params: Record<string, any>): string =>
  `Hi ${params.name.charAt(0).toUpperCase() + params.name.slice(1)}`;

export { getMessage };
