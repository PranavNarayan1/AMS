FROM node:18.16.1-alpine

WORKDIR /index/test

COPY packeg*.json ./

COPY . .

RUN npm i

EXPOSE 3001



CMD ["npm","start"]


