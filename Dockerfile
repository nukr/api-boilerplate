FROM nukr/alpine-node:5.7.1
MAINTAINER nukr <nukrs.w@gmail.com>

RUN npm install pm2 -g
WORKDIR /opt/app
EXPOSE 3000

# http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/
COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
COPY . /opt/app

# Run app
RUN chmod 755 ./bin/start
CMD ["./bin/start"]
