# IconPub

开箱即用的矢量图标管理（字体图标、公共 CDN 加速、浏览器迁移插件、自定义存储桶、私有化部署、Docker Image 支撑、桌面客户端）

## 功能特性

- 图标字体文件构建
- 前端应用 + 后端运行时
- 支持 Docker 方式构架以及部署
- 提供 Chrome 浏览器插件进行转移图标
- Git 仓库方式维护图标
- 前端编译时插件提供

### 方案

|                 | 客户端          | 运行时         | 鉴权           | 持久化       | 文件储存      |
| :-------------- | :-------------- | :------------- | :------------- | :----------- | :------------ |
| SaaS 社区版     | icons.pub       | iconpub-server | social \ email | mysql        | bucket \ file |
| SaaS 企业版     | icons.pub       | iconpub-server | social \ email | mysql        | bucket \ file |
| 企业版          | iconpub-web     | iconpub-server | ldap           | mysql-drivte | bucket \ file |
| 团队版          | iconpub-desktop | iconpub-apis   | ldap           | mysql-drivte | bucket \ file |
| 个人版          | iconpub-desktop | iconpub-apis   | -              | sqlite       | bucket \ file |
| GitHub 代码仓库 | -               | github action  | -              | lock file    | bucket \ npm  |
| GitLab 代码仓库 | -               | gitlab ci/cd   | -              | lock file    | bucket \ npm  |
| 码云代码仓库    | -               | gitee go       | -              | lock file    | bucket \ npm  |
| Vite 插件       | -               | iconpub-plugin | -              | lock file    | output file   |
| Rollup 插件     | -               | iconpub-plugin | -              | lock file    | output file   |
| Webpack 插件    | -               | iconpub-plugin | -              | lock file    | output file   |

### 开发进度

- [x] 核心包 [2022.08]
- [ ] 前端应用（主机 + 域名 + 界面 + 网关） [2022.08 - 2022.09]
- [ ] 后台服务 + 持久层 + 文件储存 + 开放接口文档） [2022.09]
- [ ] 鉴权（Email \ GitHub \ WeChat \ LDAP） [2022.09]
- [ ] 浏览器插件 [2022.10]
- [ ] 脚手架（Git CI/CD 脚本 + 模板项目） [2022.09 - 2022.10]
- [ ] 桌面客户端 [2022.10]
- [ ] 插件（Webpack \ Vite） [2022.10 - 2022.11]

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
