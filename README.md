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

|                    | Client          | Runtime        | Auth           | Storage             | File Storage  |
| :----------------- | :-------------- | :------------- | :------------- | :------------------ | :------------ |
| SaaS Community     | icons.pub       | iconpub-server | social \ email | mysql               | bucket \ file |
| SaaS Ultimate      | icons.pub       | iconpub-server | social \ email | mysql               | bucket \ file |
| Private Enterprise | iconpub-web     | iconpub-server | ldap           | custom host (mysql) | bucket \ file |
| Private Community  | iconpub-desktop | iconpub-apis   | ldap           | custom host (mysql) | bucket \ file |
| Private Personal   | iconpub-desktop | iconpub-apis   | -              | sqlite              | bucket \ file |
| GitHub Repository  | -               | github action  | -              | lock file           | bucket \ npm  |
| GitLab Repository  | -               | gitlab ci/cd   | -              | lock file           | bucket \ npm  |
| GitEE Repository   | -               | gitee go       | -              | lock file           | bucket \ npm  |
| Vite Plugin        | -               | iconpub-plugin | -              | lock file           | output file   |
| Rollup Plugin      | -               | iconpub-plugin | -              | lock file           | output file   |
| Webpack Plugin     | -               | iconpub-plugin | -              | lock file           | output file   |

### Schedules

- [x] Core [2022.08]
- [ ] WebApp(Host + Domain + UI + Gateway) [2022.08 - 2022.09]
- [ ] Node Server(Core + Storage + File Storage + OpenApi) [2022.09]
- [ ] Auth(Email \ Github \ WeChat \ LDAP) [2022.09]
- [ ] Chrome Extensions [2022.10]
- [ ] Repo Creater(Git CI/CD Scripts + Boilerplate) [2022.09 - 2022.10]
- [ ] Desktop [2022.10]
- [ ] Plugin(Webpack \ Vite) [2022.10 - 2022.11]

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
