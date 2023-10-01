# FROM ubuntu:14.04
FROM node:18-alpine

# install Node.js and other dependencies
# RUN apt-get update && \
#   apt-get -y install curl && \
#   apt-get -y install git && \
#   apt-get -y install wget && \
#   curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash - && \
#   apt-get install -y --force-yes nodejs

# Install PM2
RUN npm install -g pm2
RUN npm install -g typescript

RUN mkdir -p /var/www/box-way

WORKDIR /var/www/box-way

ADD . /var/www/box-way

RUN npm install

RUN tsc

# COPY . .
EXPOSE 3030

# RUN APP
CMD pm2 start --no-daemon processes.json