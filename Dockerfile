FROM node:24.22.0
WORKDIR /usr/src/app

COPY . .

ENV PORT=4173
EXPOSE 4173

RUN yarn install --immutable
RUN yarn build

CMD ["yarn", "start"]
