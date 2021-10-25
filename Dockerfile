FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

ARG NODE_ENV
RUN echo "$NODE_ENV"
RUN if [ "$NODE_ENV" = "development" ]; \
        then yarn; \
        else yarn --production; \
    fi

COPY . .

CMD ["node", "index.js"]
