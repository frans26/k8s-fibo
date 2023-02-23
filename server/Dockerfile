# specify base image
FROM node:14-alpine

# set working directory
WORKDIR /app

# install deps
COPY ./package.json ./
RUN npm install
COPY . .

# start server app
CMD ["npm","run","start"]
