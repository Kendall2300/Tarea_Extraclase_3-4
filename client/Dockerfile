FROM node:16

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8000

RUN npm unisntall react-router-dom
RUN npm install react-router-dom@5.2.0
RUN npm install styled-components react-table react-router-dom axios boostrap --save
RUN npm install express body-parser cors mongoose nodemon
RUN npm run build

CMD [ "npm", "run", "start"]