# IconPub

矢量图标管理平台（字体图标、浏览器迁移插件、自定义存储桶、私有化部署）

## 功能特性

- 图标字体文件构建
- 前端应用 + 后端运行时
- 支持 Docker 容器打包，快速部署私服
- 提供 Chrome 浏览器插件进行转移图标
- Git 仓库方式维护图标
- 前端编译时插件提供

### 方案

|              | 客户端         | 运行时         | 鉴权           | 持久化    | 文件储存       |
| :----------- | :------------- | :------------- | :------------- | :-------- | :------------- |
| 社区版       | iconpub-web    | iconpub-server | social \ phone | mongo     | bucket \ file  |
| 私服版       | iconpub-web    | iconpub-server | ldap \ account | mongo     | bucket \ file  |
| 仓库托管方案 | create-iconpub | iconpub-core   | -              | lock file | bucket \ npm   |
| 编译插件方案 | iconpub-plugin | vite/webpack   | -              | lock file | output bunlder |

### 开发进度

- [x] 核心包 [2022.08] (10%)
- [x] 网关 （主机、域名、证书）[2022.08] (100%)
- [x] 运维部署 （Docker 脚本、镜像发布）[2022.08] (100%)
- [ ] 前端应用 [2022.09] (20%)
- [ ] 后台服务 （核心功能、持久层、文件储存、开放接口） [2022.09] (5%)
- [ ] 鉴权 （GitHub、微信、LDAP、手机号） [2022.09] (0%)
- [ ] 脚手架 （Git CI/CD 脚本、模板项目） [2022.10] (10%)
- [ ] 浏览器插件 （迁移插件、协议、批量导入导出）[2022.10] (10%)
- [ ] 预览服务 [2022.10] (0%)
- [ ] 打包插件 （Webpack、Vite、Rollup） [2022.10] (0%)

## 开发

### 构建镜像

```bash
# gateway
cd packages/iconpub-gateway
docker build -t iconpub-gateway .

# server
cd packages/iconpub-server
docker build -t iconpub-server .

# webapp
cd packages/iconpub-webapp
docker build -t iconpub-webapp .
```

### 运行容器

```bash
# docker compose
docker compose up -d
```

```bash
# gateway (repalce *** to you folder)
docker run --name iconpub-gateway \
-v /***/nginx:/etc/ssl \
-p 80:80 \
-p 443:443 \
-itd \
-m 256m \
iconpub-gateway:latest
```

```bash
# server
docker run --name iconpub-server -itd -p 4001:4001 -m 2048m iconpub-server:latest
```

```bash
# webapp
docker run --name iconpub-webapp -itd -p 4000:4000 -m 256m iconpub-webapp:latest
```
