# syntax=docker/dockerfile:experimental
# 指定 Dockerfile 语法版本，并启用 Docker BuildKit 构建器后端

# 设置基础镜像为 node:alpine，并将此阶段命名为 `deps`
FROM node:alpine AS deps
RUN echo "开始构建开发环境依赖..."
# 安装 libc6-compat 库，这是一个兼容性库，用于在 Alpine Linux 上运行使用 glibc 编译的程序
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# 设置工作目录为 /app，将 package.json 和 pnpm-lock.yaml 文件复制到工作目录，使用 pnpm 安装依赖
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
# 将npm 源设定为 淘宝源
ENV NPM_CONFIG_REGISTRY=https://registry.npmmirror.com/
RUN pnpm install --frozen-lockfile

RUN echo "开发环境依赖构建完成！"

# Rebuild the source code only when needed
# 创建另一个阶段，命名为 `builder`
FROM node:alpine AS builder
RUN echo "开始打包..."

WORKDIR /app
# 第一个点号 . 表示当前目录，第二个点号表示目标目录是 Docker 镜像中的当前工作目录
COPY . .

# 从 `deps` 阶段复制已安装的依赖到 `builder` 阶段
COPY --from=deps /app/node_modules ./node_modules

# 安装 pnpm，构建应用，安装生产依赖
RUN npm install -g pnpm

ENV NPM_CONFIG_REGISTRY=https://registry.npmmirror.com/
ENV NEXT_PUBLIC_USERID=1d58a529-51d8-475d-b923-e8d35471624b
ENV NEXT_PUBLIC_GRAPHQL_API_URL=http://nestjs-app:4567/graphql
ENV NEXT_PUBLIC_NGINX_SERVER=http://nginx:8989

RUN pnpm build && pnpm install --production --ignore-scripts --prefer-offline

RUN echo "打包完成！"

# Production image, copy all the files and run next
# 创建另一个阶段，命名为 `runner`
FROM node:alpine AS runner
RUN echo "开始运行..."

WORKDIR /app

# 设置环境变量 NODE_ENV 为 production，添加用户和组
ENV NODE_ENV production

ENV NEXT_PUBLIC_USERID=1d58a529-51d8-475d-b923-e8d35471624b
ENV NEXT_PUBLIC_GRAPHQL_API_URL=http://nestjs-app:4567/graphql
ENV NEXT_PUBLIC_NGINX_SERVER=http://nginx:8989

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
# 从 `builder` 阶段复制应用程序代码、已安装的依赖、package.json 文件和构建输出到 /app 目录
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# 切换用户为 nextjs，暴露 3000 端口，设置环境变量 PORT 为 3000
USER nextjs
EXPOSE 3000
ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node_modules/.bin/next", "start"]

RUN echo "运行成功！"

#这个 Dockerfile 使用了多阶段构建。多阶段构建是一种在 Dockerfile 中定义多个构建阶段的技术，每个阶段都可以使用不同的基础镜像和构建步骤，最终生成的镜像只包含一个阶段的输出结果，可以减小镜像的大小并提高安全性。
# 在这个 Dockerfile 中，使用了三个不同的构建阶段：
# deps 阶段：安装项目依赖。在这个阶段中，使用 pnpm 安装项目依赖，并将其复制到下一个阶段中。这个阶段的输出是已安装的依赖项。
# builder 阶段：构建应用程序。在这个阶段中，使用已安装的依赖项构建应用程序，并将构建结果复制到下一个阶段中。这个阶段的输出是构建后的应用程序和生产依赖项。 
# runner 阶段：运行应用程序。在这个阶段中，复制构建后的应用程序和生产依赖项，设置环境变量和用户，最终生成的镜像只包含这个阶段的输出结果。
# 使用多阶段构建可以减小生成的镜像大小，并且可以分离不同的构建步骤，使得构建更加灵活和可维护。在这个 Dockerfile 中，将安装依赖项、构建应用程序和运行应用程序分别放在了不同的阶段中，使得构建过程更加清晰和可控。