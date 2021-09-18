# KITSTARTER API

Kitstarter for API using Docker, Typescript and Hapi.js and good practices.

## Before you start / Installation

This project works with docker.

1.  Download this repo
2.  Launch :

```
    npm install
```

3.  Install typescript globally for compilation:

```
    npm install -g typescript
```

4. Put .env file (project root)

Example:
```
NODE_ENV=development
PORT=5000
HOST=kitstarter-api.local
ALLOWED_CORS=http://localhost,http://kitstarter-api.local:5000
CACHE_EXPIRES_IN=1800000

MYSQL_ROOT_USER=root
MYSQL_ROOT_PASSWORD=admin
MYSQL_SHOP_HOST=database
MYSQL_SHOP_PORT=3306
MYSQL_SHOP_USER=root
MYSQL_SHOP_PASSWORD=admin
MYSQL_SHOP_DATABASE=kitstarter

ADM_HOST=database
ADM_PORT=3306

TYPEORM_SHOP_NAME=kitstarter
```

## RUN

For dev environnement, you can build the env with `make build-dev` then run with `make dev`

For production environnement, you can build the env with `make build-prod` then run with `make prod`

## TESTS

This project use Chai and Mocha for units tests

Run tests :

```
    make tests
```
