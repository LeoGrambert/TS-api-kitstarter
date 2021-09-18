
FROM node:14-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig.json ./
COPY ./src ./src
RUN yarn install

FROM build as dev
WORKDIR /usr/src/app
EXPOSE 5000
CMD yarn dev

FROM build as prod
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY package*.json ./
RUN yarn install --only=production
EXPOSE 5000
CMD yarn start
