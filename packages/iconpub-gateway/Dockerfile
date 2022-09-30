FROM nginx:alpine

LABEL maintainer="IconPub Gateway <icons.pub>"

WORKDIR /root

# ports
EXPOSE 80
EXPOSE 443

# copy file
COPY ./public /usr/share/nginx/public
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./runner.sh ./

CMD ["sh", "./runner.sh"]
