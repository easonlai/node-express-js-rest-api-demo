FROM node:14.17-alpine

ADD package.json package.json
RUN npm install
ADD . .

CMD ["node","index.js"]