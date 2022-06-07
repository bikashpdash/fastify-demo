FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# COPY src ./src
# COPY package*.json ./

# RUN npm install
# ENV APP_PORT=3600
# EXPOSE 3600
# ENTRYPOINT ["npm","start"]


COPY dist ./
ENV SERVER_PORT=3600
ENV SERVER_HOST=0.0.0.0
EXPOSE 3600
ENTRYPOINT ["node","main.bundle.cjs"]