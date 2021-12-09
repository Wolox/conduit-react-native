FROM node:12.13.0

USER node

WORKDIR /home/node

COPY ./package.json .

RUN npm install
ENV PATH /home/node/node_modules/.bin:$PATH

WORKDIR /home/node/app
