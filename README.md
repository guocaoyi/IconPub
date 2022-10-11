# IconPub

IconPub is an icon management platform(IconFont、Chrome Extension for migraton、Docker Images、Private deployment)

## Features

- IconFont file compiler
- FrontEnd app + Node Server
- Docker Images
- Chrome Extensions for icons migration
- Git repository to manage icons
- FrontEnd app compiler plugin(vite \ webpack)

### Solutions

|                | Client         | Runtime        | Auth           | Storage   | File Storage   |
| :------------- | :------------- | :------------- | :------------- | :-------- | :------------- |
| Community      | iconpub-web    | iconpub-server | social \ phone | mysql     | bucket \ file  |
| Ultimate       | iconpub-web    | iconpub-server | ldap \ account | mysql     | bucket \ file  |
| Git Repository | create-iconpub | iconpub-core   | -              | lock file | bucket \ npm   |
| Bundler Plugin | iconpub-plugin | vite/webpack   | -              | lock file | output bunlder |

### Schedules

- [x] Core [2022.08] (10%)
- [x] Gateway (Host \ Domain \ SSL) [2022.08] (100%)
- [x] Deployment （DockerFile \ Images） [2022.08] (100%)
- [ ] WebApp [2022.09] (20%)
- [ ] Backend Service (Core \ Storage \ File Storage \ OpenApi) [2022.09] (5%)
- [ ] Authorization (GitHub \ WeChat \ LDAP \ Phone) [2022.09] (0%)
- [ ] Creater (Git CI/CD Scripts \ Boilerplate) [2022.10] (10%)
- [ ] Chrome Extensions (Ext \ Schemas \ Batch Export & Import) [2022.10] (10%)
- [ ] Preivew Server (Demo page \ Download) [2022.10] (0%)
- [ ] Bundler Plugin (Webpack \ Vite \ Rollup) [2022.10] (0%)

## Development

### Build Images

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

### Container Run

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
-m 1024m \
iconpub-gateway:latest
```

```bash
# db
docker run --name iconpub-mongo -itd -p 27017:27017 -m 4096m mongo:5.0.8
```

```bash
# server
docker run --name iconpub-server -itd -p 4001:4001 -m 2048m iconpub-server:latest
```

```bash
# webapp
docker run --name iconpub-webapp -itd -p 4000:4000 -m 512m iconpub-webapp:latest
```
