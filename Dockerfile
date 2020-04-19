FROM node:latest AS build

WORKDIR /chuckNorrisClient
COPY ./package.json .
RUN npm i fsevents@latest -f --save-optional
RUN npm i serve -g
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["serve", "-s", "build"]