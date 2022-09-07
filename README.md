# IconPub

IconPub is an icon management system!

## Features

- Icon Font file compiler
- FrontEnd app + Node Server
- Docker Images
- Chrome Extensions for icons migration
- Git repository to manage icons
- FrontEnd app compiler plugin(vite \ webpack)

### Solutions

|            | Client          | Runtime        | Auth           | Storage   | File Storage  |
| :--------- | :-------------- | :------------- | :------------- | :-------- | :------------ |
| Community  | iconpub-web     | iconpub-server | social \ email | mysql     | bucket \ file |
| Enterprise | iconpub-web     | iconpub-server | ldap           | mysql     | bucket \ file |
| Personal   | iconpub-desktop | iconpub-server | -              | sqlite    | bucket \ file |
| Git        | git repo        | ci/cd          | -              | lock file | bucket \ npm  |
| Plugin     | -               | iconpub-plugin | -              | lock file | output file   |

### Schedules

- [x] Core [2022.08] (0%)
- [ ] WebApp (Host + Domain + UI + Gateway) [2022.09] (0%)
- [ ] Node Server(Core + Storage + File Storage + OpenApi) [2022.09] (0%)
- [ ] Auth(Email \ GitHub \ WeChat \ LDAP) [2022.09] (0%)
- [ ] Chrome Extensions [2022.10] (0%)
- [ ] Repo Creater(Git CI/CD Scripts + Boilerplate) [2022.10] (0%)
- [ ] Preivew Server(Demo page + Download) [2022.10] (0%)
- [ ] Desktop [2022.10] (0%)
- [ ] Plugin(Webpack \ Vite) [2022.10 - 2022.11] (0%)

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
