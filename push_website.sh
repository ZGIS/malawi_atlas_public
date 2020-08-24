#! /bin/sh

# Copies the website built to the web server
# NOTE: Not implemented in Makefile because TIMESTAMP varibale is 
#       apparently not static

TIMESTAMP=$(date +"%Y-%m-%dT%H%M")
WEBSITE_TEMPORARY_DIR=/home/gis-malawi/tmp/${TIMESTAMP}_website
WEBSITE_PUBLISH_DIR=/var/www/html/

rsync \
    --recursive \
    --verbose \
    webapp/build/production/MalawiAtlas/* \
    malawi-atlas:${WEBSITE_TEMPORARY_DIR};

# "-t" flag is necessary for executing the sudo command
ssh -t \
  malawi-atlas \
  "sudo cp \
    --verbose \
    --recursive ${WEBSITE_TEMPORARY_DIR}/* \
    ${WEBSITE_PUBLISH_DIR}"