FROM node:16

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install
RUN npm install express body-parser cors mongoose nodemon

COPY . .

EXPOSE 3000

CMD [ "index.js" ]