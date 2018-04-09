FROM node:8.4.0-alpine

MAINTAINER pradeep t

ADD src /srv/progress-planner/current/src
COPY package.json /srv/progress-planner/current/
COPY server.js /srv/progress-planner/current/

WORKDIR /srv/progress-planner/current

# install and build using linked imagemin dependencies (pngquant, optipng, and libwebp-tools for cwebp)
RUN apk update \
  && apk upgrade \
  && apk add --no-cache bash \
  && apk add --no-cache --virtual .dev-deps make linux-headers musl-dev libpng-dev lcms2-dev optipng \
  && apk add --no-cache -X http://dl-3.alpinelinux.org/alpine/edge/community/ pngquant libwebp-tools \
  && yarn install \
  && yarn cache clean \

EXPOSE 3001

# start application, linting & unit specs must pass for this to run
CMD ["yarn", "start"]
