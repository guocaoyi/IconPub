#!/bin/sh
# vim:sw=4:ts=4:et

sed -i s/0.0.0.0/localhost/g /etc/nginx/nginx.conf

nginx -s reload
