# IconPub

IconPub is an icon management system!

## Features

- webapp
- webapp(nginx server + dist)
- node server(nestjs)

### Solutions

| Solution           | Client           | Runtime                | Auth           | Storage             | File Storage  |
| :----------------- | :--------------- | :--------------------- | :------------- | :------------------ | :------------ |
| SaaS Community     | official website | iconpub-server         | github \ email | mysql               | tencent cos   |
| SaaS Ultimate      | official website | iconpub-server         | github \ email | mysql               | bucket \ file |
| Private Enterprise | iconpub-web      | iconpub-server         | ldap           | custom host (mysql) | bucket \ file |
| Private Personal   | desktop          | electron main process  | -              | sqlite              | bucket \ file |
| Private Community  | desktop          | electron main process  | ldap           | custom host (mysql) | bucket \ file |
| GitHub             | git-repo         | github action          | -              | lock file           | bucket \ npm  |
| GitLab             | git-repo         | gitlab ci/cd           | -              | lock file           | bucket \ npm  |
| GitEE              | git-repo         | gitee go               | -              | lock file           | bucket \ npm  |
| Vite Plugin        | -                | vite compiler + plugin | -              | lock file           | output file   |
| Rollup Plugin      | -                | rollup + plugin        | -              | lock file           | output file   |
| Webpack Plugin     | -                | webpack + plugin       | -              | lock file           | output file   |

## Schedules

- [ ] Core [2022.08]
- [ ] WebApp(Host + Domain + UI + Gateway) [2022.08 - 2022.09]
- [ ] Server(Core + Storage + File Storage + OpenApi) [2022.09]
- [ ] Auth(Github \ WeChat \ Email \ LDAP) [2022.09]
- [ ] Chrome Extensions [2022.10]
- [ ] Repo(Git CI/CD Scripts + Boilerplate) [2022.09 - 2022.10]
- [ ] Desktop [2022.10]
- [ ] Plugin(Webpack + Vite) [2022.10 - 2022.11]

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
