FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY app ./app

COPY server.js ./
COPY app/routes ./routes


EXPOSE 3000

CMD ["node", "server.js"]
