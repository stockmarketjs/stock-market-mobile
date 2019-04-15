FROM keymetrics/pm2:8-alpine as builder
MAINTAINER  zhouyu muyu.zhouyu@outlook.com
COPY package.json .
COPY package-lock.json .
COPY src src/
COPY web.conf .
COPY .eslintrc.js .
COPY .editorconfig .
RUN npm install --registry=https://registry.npm.taobao.org
RUN npm run build

FROM daocloud.io/library/nginx:1.13.0-alpine
MAINTAINER  zhouyu muyu.zhouyu@outlook.com
COPY --from=builder dist dist/
COPY --from=builder web.conf etc/nginx/conf.d/
RUN apk add -U tzdata && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && apk del tzdata