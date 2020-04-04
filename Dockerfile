FROM node:12

COPY . components

WORKDIR components

RUN yarn install --frozen-lockfile && \
    yarn build:doc

CMD ["yarn", "start:doc"]
