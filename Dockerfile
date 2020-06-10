FROM node:12.13-alpine
WORKDIR /usr/src/test
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=0 /usr/src/test/dist/ /usr/share/nginx/html
