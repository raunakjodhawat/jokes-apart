FROM node:latest AS build

WORKDIR /chuckNorrisClient
COPY ./package.json .
RUN npm i fsevents@latest -f --save-optional
RUN i serve -g
RUN npm install
COPY . .
RUN npm run build

CMD ["serve", "-s", "build"]