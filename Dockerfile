# authenticated build with gneral best practices

# --- base stage ---
FROM node:16.13.0-alpine AS base

# --- build stage ---
FROM base as build

WORKDIR /app

COPY ./package.json ./

COPY ./yarn.lock ./

RUN yarn install --frozen-lockfile

COPY ./ ./

RUN yarn build


### --- final stage --- ###
FROM base as final

ENV NODE_ENV production

RUN apk --no-cache -U upgrade

RUN mkdir -p /home/node/app/dist && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node ./package.json ./ 
COPY --chown=node:node ./yarn.lock ./

USER node

RUN yarn --prod --frozen-lockfile

COPY --chown=node:node --from=build ./app/dist ./dist

CMD yarn start