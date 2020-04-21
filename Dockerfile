FROM node:latest AS build

WORKDIR /chuckNorrisClient
COPY ./package.json .
RUN npm i fsevents@latest -f --save-optional
RUN npm install --no-optional
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=build /chuckNorrisClient/build /usr/share/nginx/html