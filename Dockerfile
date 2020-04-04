FROM node:12

COPY . components

WORKDIR components

RUN yarn install --frozen-lockfile && \
    yarn doc

CMD ["yarn", "start-doc"]
