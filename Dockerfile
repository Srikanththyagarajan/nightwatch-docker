FROM node:carbon

RUN echo "deb http://http.debian.net/debian jessie-backports main" > /etc/apt/sources.list.d/jessie-backports.list
RUN apt-get update && apt-get install -t jessie-backports -y openjdk-8-jre

RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN echo 'deb http://dl.google.com/linux/chrome/deb/ stable main' >> /etc/apt/sources.list
RUN apt-get update && apt-get install --no-install-recommends -y google-chrome-stable

ENV HOME /home/node/app
WORKDIR /home/node/app
VOLUME ["/home/node/app"]

RUN chown -Rv node:node /home/node/app
USER node

CMD ["npm", "run", "test:dockerhost"]
