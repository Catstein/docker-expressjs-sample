FROM node:14
WORKDIR /app-node
ARG BUILD_PORT=3000
ENV port=${BUILD_PORT}
EXPOSE ${BUILD_PORT}
COPY . .
RUN npm install
ENTRYPOINT npm start