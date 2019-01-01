FROM node:alpine

WORKDIR /opt
COPY package.json package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force

COPY server-env.js ./

USER nobody

ENTRYPOINT ["node", "server-env.js"]
