# IconPub

开箱即用的矢量图标管理（字体图标、公共 CDN 加速、浏览器迁移插件、自定义存储桶、私有化部署、Docker Image 支撑、桌面客户端）

## 特性

- [ ] IconSVG to FontSVG to Font TTF to WOFF\EOT\WOFF2
- [ ] Github WorkFlow
- [ ] Gitlab CICD Pipeline
- [ ] NPM CLI
- [ ] Migrate - Chrome Extension
- [ ] GUI & Server

## 架构视图

- gateway(nginx server + ssl + lb)
- webapp(nginx server + dist)
- node server(nestjs)

## Docker

### 构建镜像

```bash
# 网关服务
cd packages/iconpub-gateway
docker build -t yalda/iconpub-gateway .

# 后端服务
cd packages/iconpub-server
docker build -t yalda/iconpub-server .

# 前端应用
cd packages/iconpub-webapp
docker build -t yalda/iconpub-webapp .
```

### 容器运行

```bash
# docker compose up -d
docker compose up -d
```

```bash
# 网关服务
docker run --name iconpub-gateway \
-v /***/nginx:/etc/ssl \
-p 80:80 \
-p 443:443 \
-itd \
-m 256m \
yalda/iconpub-gateway:latest
```

```bash
# 后端服务
docker run --name iconpub-server -itd -p 4001:4001 -m 2048m yalda/iconpub-server:latest
```

```bash
# 前端应用
docker run --name iconpub-webapp -itd -p 4000:4000 -m 256m yalda/iconpub-webapp:latest
```
