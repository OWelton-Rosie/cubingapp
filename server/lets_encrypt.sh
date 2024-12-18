#!/bin/bash

sudo snap install --classic certbot

DOMAIN=cubingapp.com
WILDCARD=*.$DOMAIN

echo $DOMAIN && echo $WILDCARD

sudo certbot -d $DOMAIN -d $WILDCARD --manual --preferred-challenges=dns certonly --key-type ecdsa

# Need to restart apache sinc the cert files have changed
sudo service apache2 restart