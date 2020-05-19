FROM node:12

RUN npm install -g @angular/cli

ENV SHELL /bin/bash

WORKDIR /app

