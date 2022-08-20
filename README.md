# IconPub

## Features

- IconSVG to FontSVG to Font TTF to WOFF\EOT\WOFF2（完成）
- Github WorkFlow（完成）
- Gitlab CICD Pipeline（完成）
- NPM CLI（开发测试中）
- Picker - Chrome Extension（开发中）
- GUI & Server（待开发）

## Issues

- 生成图标镜面反转（待解决）
- IconFont 兼容性（待解决）

## IconFont Project Transfer

use iconpub-migrate for only once

## WorkFlow

> 以下方案，均默认以 Font 方式管理图标；
> 小项目优先使用 本地 IMG & SVG 方式管理图标；
> 大项目优先使用 Font 方式管理图标（pages > 100 contributers > 10）

### 使用 GitHub 仓库管理

### 使用 Gitlab 仓库管理

### 使用 NPM 包管理

### 使用私有化部署服务管理

## Archi

- gateway(nginx server)
- webapp(nginx server + dist)
- node server

## Docker

### Build Images

```bash
# gateway
cd packages/iconpub-gateway
docker build -t yalda/iconpub-gateway .

# server
cd packages/iconpub-server
docker build -t yalda/iconpub-server .

# webapp
cd packages/iconpub-webapp
docker build -t yalda/iconpub-webapp .
```

### Container Rnn

```bash
# docker compose
docker compose up -d
```

```bash
# gateway
docker run --name iconpub-gateway \
-v /***/nginx:/etc/ssl \
-p 80:80 \
-p 443:443 \
-itd \
-m 256m \
yalda/iconpub-gateway:latest
```

```bash
# server
docker run --name iconpub-server -itd -p 4001:4001 -m 2048m yalda/iconpub-server:latest
```

```bash
# webapp
docker run --name iconpub-webapp -itd -p 4000:4000 -m 256m yalda/iconpub-webapp:latest
```
