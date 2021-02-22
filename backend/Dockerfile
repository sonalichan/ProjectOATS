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

CMD ["sails", "lift"]


# Steps to build and run - everything should be run from the backend/ folder

# build container: docker build -t sails-app .
# run container: docker run -d --name sails-app -p 1337:1337 sails-app