FROM node:20.9.0
WORKDIR /www
COPY . .
RUN cp .env.example .env
RUN yarn install
EXPOSE 3000
CMD ["yarn", "dev"] 
