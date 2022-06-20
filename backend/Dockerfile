FROM node:latest
WORKDIR /app
COPY package.json .
COPY ../frontend/dist/vizsgaremek/ ./public
RUN npm i
CMD [ "npm", "start" ]
