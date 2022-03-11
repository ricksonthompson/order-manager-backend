FROM node:lts-alpine

RUN apk update

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./
COPY nest-cli.json ./
COPY src ./src
COPY test ./test
COPY ormconfig.js ./

RUN npm i
RUN npm run build

EXPOSE 8081

CMD ["npm", "start"]