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

TYPEORM_SHOP_NAME=''
```

## RUN

For dev environnement, you can build the env with `make build-dev` then run with `make dev`

For production environnement, you can build the env with `make build-prod` then run with `make prod`

Go on: [kitstarter-api.local:5000/api/v1/hello](kitstarter-api.local:5000/api/v1/hello)

## TYPESCRIPT JOI/INTERFACES

If you need to use Joi for response validation (in other words, if you create a new schema in /src/schema), you shouldn't create corresponding interfaces manually. You have to run :

```
    npm run types
```

This will create automatically your interfaces.
Joi is used to build route documentation and to validate route params, query, response, etc.

## TESTS

This project use Chai and Mocha for units tests

Run tests :

```
    make tests
```

## DOCUMENTATION API

[kitstarter-api.local:5000/api/v1/documentation](kitstarter-api.local:5000/api/v1/documentation)
