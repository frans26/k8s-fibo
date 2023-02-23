# specify base image
FROM node:14-alpine as build

# set working directory
WORKDIR /app

# install deps
COPY package*.json ./
RUN npm install
COPY . .

# build web app
RUN npm run build

# nginx base image
FROM nginx:stable-alpine
EXPOSE 3000

# copy nginx config
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# copy web app build
COPY --from=build /app/build /usr/share/nginx/html