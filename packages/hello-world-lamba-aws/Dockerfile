FROM node:18.15.0-alpine3.17 AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
RUN yarn global add turbo
WORKDIR /app
COPY . .
RUN turbo prune --scope=hello-world

FROM node:18.15.0-alpine3.17 AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=builder /app/out .
RUN yarn install
RUN yarn turbo run build --filter=hello-world

FROM node:18.15.0-alpine3.17 AS dependencies
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=builder /app/out .
RUN yarn install --production

FROM public.ecr.aws/lambda/nodejs:18 as runner
COPY --from=installer /app/apps/hello-world/dist ./
COPY --from=installer /app/packages ./packages
COPY --from=dependencies /app/node_modules ./node_modules
CMD [ "index.handler" ]


