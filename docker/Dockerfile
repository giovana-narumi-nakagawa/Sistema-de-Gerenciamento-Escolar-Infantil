FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY app ./app

COPY server.js ./
COPY ./routes ./routes

RUN npm install cors

EXPOSE 3000

CMD ["node", "server.js"]
