# build from the latest LTS version of node
FROM node:14

# create app directory
WORKDIR /usr/src/app

# copy dependencies and instlal
COPY package*.json ./

RUN npm install sails -g

RUN npm install

# copy over app into docker container
COPY . .

# expose sails' default port
EXPOSE 1337
