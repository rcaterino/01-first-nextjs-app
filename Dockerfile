FROM node:19-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

# USER nexrt.js

EXPOSE 3000

CMD ["npm", "run", "start"]