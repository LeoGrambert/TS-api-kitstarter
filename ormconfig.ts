const dbConfig =
  process.env.TYPEORM_SHOP_NAME && process.env.TYPEORM_SHOP_NAME !== ''
    ? {
        name: process.env.TYPEORM_SHOP_NAME,
        type: 'mysql',
        host: process.env.MYSQL_SHOP_HOST,
        port: process.env.MYSQL_SHOP_PORT || '3306',
        username: process.env.MYSQL_SHOP_USER,
        password: process.env.MYSQL_SHOP_PASSWORD,
        database: process.env.MYSQL_SHOP_DATABASE,
        synchronize: false,
        logging: false,
      }
    : {};

export = dbConfig;
