FROM nginx:alpine

LABEL maintainer="IconPub Gateway <icons.pub>"

WORKDIR /root

# ports
EXPOSE 80
EXPOSE 443

# copy file
COPY ./runner.sh ./
COPY ./public /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

# CMD ["sh", "./runner.sh"]
