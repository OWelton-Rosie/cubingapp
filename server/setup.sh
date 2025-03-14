sudo apt-get update
sudo apt install apache2 sqlite3 php libapache2-mod-php php-sqlite3 php-curl

# Remove index.html so it doesn't override index.php
sudo rm /var/www/html/index.html

# Edit apache config
cd /etc/apache2/sites-available
sudo cp 000-default.conf gci.conf
sudo vim gci.conf
sudo cp gci.conf /etc/apache2/sites-available/gci.conf

# Enable apache modules
sudo a2enmod rewrite # For rewriting urls
sudo a2enmod ssl # For https

# To activate
sudo a2ensite gci.conf
sudo service apache2 reload
sudo service apache2 restart

# Verify apache config is valid
sudo apachectl configtest

# Apache status/logs
systemctl status apache2.service
journalctl -xeu apache2.service
tail -f /var/log/apache2/access.log
tail -f /var/log/apache2/error.log

# If needed, run npm i -g esbuild
../node_modules/.bin/esbuild packages/alg/index.ts \
    --outdir="src/js/alg" \
    --bundle \
    --minify \
    --keep-names \
    --format=esm

../node_modules/.bin/esbuild packages/rubiks-viz/index.ts \
    --outdir="src/js/rubiks-viz" \
    --bundle \
    --minify \
    --keep-names \
    --format=esm

../node_modules/.bin/esbuild packages/scramble/index.ts \
    --outdir="src/js/scramble" \
    --bundle \
    --minify \
    --keep-names \
    --format=esm

../node_modules/.bin/esbuild packages/timerData/src/index.ts \
    --outdir="src/js/timerData" \
    --bundle \
    --minify \
    --keep-names \
    --format=esm
