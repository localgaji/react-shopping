# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY . .
COPY default.conf

ENV REACT_APP_API_URL=http://abcde.com

RUN npm ci
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "build"]
