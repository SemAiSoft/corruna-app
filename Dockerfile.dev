FROM node:lts-alpine

ENV NODE_ENV=production

EXPOSE 2024


RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY ./package.json .
RUN npm install -f
RUN npm install pm2 -g

COPY . .

CMD [ "npm", "run", "start" ]