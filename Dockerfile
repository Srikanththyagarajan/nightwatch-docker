FROM node:carbon-alpine

RUN apk --update add openjdk8-jre

WORKDIR /home/node/app

CMD ["npm", "test"]
EXPOSE 5555
