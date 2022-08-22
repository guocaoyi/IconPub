# IconPub

## Features

- [ ] IconSVG to FontSVG to Font TTF to WOFF\EOT\WOFF2
- [ ] Github WorkFlow \ Gitlab CICD Pipeline
- [ ] NPM CLI
- [ ] Migrate - Chrome Extension
- [ ] GUI
- [ ] Server

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
