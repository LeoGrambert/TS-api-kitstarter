import { Connection, createConnection } from 'typeorm';

const connection = async (): Promise<Connection> => await createConnection(process.env.TYPEORM_SHOP_NAME as string);

export default connection;
