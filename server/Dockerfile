# Base image
FROM node:16.13.0

WORKDIR /app

# Install dependencies
COPY package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 8080

CMD ["node", "server.js"]