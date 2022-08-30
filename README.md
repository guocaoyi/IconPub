# IconPub

## Architecture

- gateway(nginx server + ssl + lb)
- webapp(nginx server + dist)
- node server(nestjs)

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

### Container Run

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

## Solutions

| Solution           | Client           | Runtime                  | Auth           | Storage             | File Storage         |
| :----------------- | :--------------- | :----------------------- | :------------- | :------------------ | :------------------- |
| SaaS Community     | official website | iconpub-server           | github \ email | mysql               | tencent cos          |
| SaaS Ultimate      | official website | iconpub-server           | github \ email | mysql               | bucket \ file        |
|                    |                  |                          |                |                     |                      |
| Private Enterprise | iconpub-web      | iconpub-server           | ldap           | custom host (mysql) | bucket \ file        |
|                    |                  |                          |                |                     |                      |
| Private Personal   | desktop          | electron main process    | -              | sqlite              | bucket \ file        |
| Private Community  | desktop          | electron main process    | ldap           | custom host (mysql) | bucket \ file        |
|                    |                  |                          |                |                     |                      |
| GitHub             | git-repo         | github action            | -              | lock file           | bucket \ npm         |
| GitLab             | git-repo         | gitlab ci/cd             | -              | lock file           | bucket \ npm         |
| GitEE              | git-repo         | gitee go                 | -              | lock file           | bucket \ npm         |
|                    |                  |                          |                |                     |                      |
| Vite Plugin        | -                | vite compiler + plugin   | -              | lock file           | compiler output file |
| Rollup Plugin      | -                | rollup compiler + plugin | -              | lock file           | compiler output file |
| Webpack Plugin     | -                | webpack + plugin         | -              | lock file           | compiler output file |

> bucket support: tencent cos \ aliyun oss
