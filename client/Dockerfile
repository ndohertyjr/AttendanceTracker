# Base image
FROM node:16.13.0

# Working Directory
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run start


