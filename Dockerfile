FROM node:16-alpine

# Create app directory

ADD ./dist/main.bundle.cjs /
ENV APP_PORT=3600
EXPOSE 3600
CMD ["node","main.bundle.cjs"]