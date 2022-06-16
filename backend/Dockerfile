FROM node:latest
WORKDIR /app
COPY . .
COPY ../frontend/dist/vizsgaremek/ ./public
RUN npm i
CMD [ "npm", "start" ]
