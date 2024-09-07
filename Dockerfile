ARG NODE_VERSION=20.16
FROM node:${NODE_VERSION}-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 3000
RUN npm run build-only