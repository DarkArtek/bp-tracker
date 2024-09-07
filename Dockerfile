ARG NODE_VERSION=20.16
FROM node:${NODE_VERSION}-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY . .
USER node
RUN npm ci
EXPOSE 3000
RUN npm run build-only