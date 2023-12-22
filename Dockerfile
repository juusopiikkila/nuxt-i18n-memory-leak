FROM node:20.10-bookworm-slim@sha256:363a50faa3a561618775c1bab18dae9b4d0910a28f249bf8b72c0251c83791ff as builder

WORKDIR /usr/src/app

ENV NODE_ENV production

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn .yarn/
RUN yarn install

COPY . ./

RUN yarn build && \
    rm -rf node_modules && \
    yarn cache clean --all

FROM node:20.10-bookworm-slim@sha256:363a50faa3a561618775c1bab18dae9b4d0910a28f249bf8b72c0251c83791ff

RUN apt-get update && apt-get install -y tini

WORKDIR /usr/src/app

ARG BUILD

ENV HOST 0.0.0.0
ENV PORT 3000
ENV NODE_ENV production

COPY --from=builder /usr/src/app/.output .

EXPOSE 3000

USER node

ENTRYPOINT ["/usr/bin/tini", "--", "node", "server/index.mjs"]
