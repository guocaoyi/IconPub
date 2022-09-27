# IconPub

IconPub is an icon management system!

## Features

- IconFont file compiler
- FrontEnd app + Node Server
- Desktop(base on Electron + Netron)
- Docker Images
- Chrome Extensions for icons migration
- Git repository to manage icons
- FrontEnd app compiler plugin(vite \ webpack)

### Solutions

|                | Client          | Runtime        | Auth           | Storage   | File Storage  |
| :------------- | :-------------- | :------------- | :------------- | :-------- | :------------ |
| Community      | iconpub-web     | iconpub-server | social \ phone | mysql     | bucket \ file |
| Ultimate       | iconpub-web     | iconpub-server | ldap           | mysql     | bucket \ file |
| Personal       | iconpub-desktop | iconpub-server | -              | sqlite    | bucket \ file |
| Git Repository | create-iconpub  | ci/cd scripts  | -              | lock file | bucket \ npm  |
| Bundler Plugin | iconpub-plugin  | -              | -              | lock file | output file   |

### Schedules

- [x] Core [2022.08] (10%)
- [x] Gateway (Host \ Domain \ SSL) [2022.08] (100%)
- [x] Deployment （DockerFile \ Images） [2022.08] (100%)
- [ ] WebApp [2022.09] (0%)
- [ ] Backend Service (Core \ Storage \ File Storage \ OpenApi) [2022.09] (0%)
- [ ] Authorization (GitHub \ WeChat \ LDAP \ Phone) [2022.09] (0%)
- [ ] Creater (Git CI/CD Scripts \ Boilerplate) [2022.10] (0%)
- [ ] Chrome Extensions (Ext \ Schemas \ Batch Export & Import) [2022.10] (0%)
- [ ] Preivew Server (Demo page \ Download) [2022.10] (0%)
- [ ] Bundler Plugin (Webpack \ Vite \ Rollup) [2022.10] (0%)
- [ ] Desktop [2022.10 - 2022.11] (0%)

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
