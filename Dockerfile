FROM node:latest AS build

WORKDIR /chuckNorrisClient
COPY package.json .
RUN npm install
RUN npm i fsevents@latest -f --save-optional
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=build /chuckNorrisClient/build /usr/share/nginx/html