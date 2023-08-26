FROM node:18.14.2-alpine

WORKDIR /data/app
COPY . .

RUN npm install

CMD ["npm", "run", "start"]