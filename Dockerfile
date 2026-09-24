FROM node:22-alpine
WORKDIR /app
COPY package.json ./
COPY server.js ./
COPY index.html ./
COPY archive ./archive
EXPOSE 3000
CMD ["node","server.js"]
