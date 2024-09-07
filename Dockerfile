ARG NODE_VERSION=20.16.0
FROM node:${NODE_VERSION}-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
USER node
COPY . .
RUN npm install
EXPOSE 3000
RUN npm run build-only