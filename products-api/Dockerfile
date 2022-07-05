FROM node:14
WORKDIR .
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 3030
CMD ["npm", "run", "start:dev"]
