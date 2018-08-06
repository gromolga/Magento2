#!/usr/bin/env bash

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'


PROJECT='pm2'
LOCALE='sv_SE'

# install grunt locally
if [ -f 'mamp_php.sh' ]; then
    source mamp_php.sh
fi

echo -e "${GREEN} --- Start deploying ${PROJECT} --- ${NC}\n"

if ! grep --quiet "blank:" dev/tools/grunt/configs/themes.js ; then
    echo -e "${RED}!!! Warning: the grunt config is missing. Less compilation wouldn't work. !!!${NC}\n";
fi

git pull origin master
composer install
bin/magento cache:clean
bin/magento setup:upgrade
bin/magento indexer:reindex
if [ ! -f vendor/etendo/deployment/registration.php ]; then
    echo "Etendo_Deployment module is not installed"
else
    bin/magento session:update:items
fi

# install grunt locally
if [ ! -d 'node_modules' ]; then
    npm install
fi

# deploy static content
if [[ -n "$1" ]] && [[ "$1" == "content" ]]; then

    # remove js-translation
    if [[ -n "$2" ]] && [[ "$2" == "translate" ]]; then
        echo -e "\n${GREEN} Remove translations ${NC}"
        echo -e "Notice: please clear the cookie and local storage in your browser to see the changes\n"

        for translate in $(find . -name "js-translation.json")
        do
            rm ${translate}
        done
    fi

    rm -rf pub/static/frontend/Etendo/*
    rm -rf var/view_preprocessed/source/frontend/Etendo/*
    rm -rf var/view_preprocessed/css/frontend/Etendo/*

    bin/magento setup:static-content:deploy ${LOCALE}

    grunt exec:blank
    grunt less:blank
fi

sudo chown -R :www-data .
sudo chmod -R 755 .
sudo chmod -R 775 app/etc pub/ var/ generated/

echo -e "${GREEN} --- Done --- ${NC}\n"

exit;
