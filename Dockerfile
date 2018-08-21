##
## IMAGE: build-client
##
FROM node:10.4 AS build-client
ENV NODE_ENV production
WORKDIR /client

# COPY src/client/package.json src/client/yarn.lock ./
COPY src/client/package.json ./
RUN yarn

COPY src/client ./
RUN yarn build

##
## IMAGE: build-server
##
FROM node:10.4 AS build-server
ENV NODE_ENV production
WORKDIR /app

# copy csproj and restore as distinct layers
COPY src/server/package.json src/server/yarn.lock ./
RUN yarn

COPY src/server ./
RUN yarn build

##
## IMAGE: runtime
##
FROM node:10.4 AS runtime
ENV NODE_ENV production

WORKDIR /app
COPY --from=build-client client/dist ./client/dist
COPY --from=build-server server/dist ./server/dist

WORKDIR /app/server

EXPOSE 3000
CMD [ "node", "start" ]


# then to build
# docker build --tag poorclares .

# then to run
# docker run -p 80:80 --name poorclaresarundel poorclares

# docker stop poorclaresarundel
# docker rm poorclaresarundel

# to run terminal inside container
# docker exec -it 191e bash 