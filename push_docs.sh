#! /bin/sh

# Copies the content of the docs directory to the web server
# NOTE: Not implemented in Makefile because TIMESTAMP varibale is 
#       apparently not statics

TIMESTAMP=$(shell date +"%Y-%m-%dT%H%M")
DOCS_TEMPORARY_DIR=/home/gis-malawi/tmp/${TIMESTAMP}_docs
DOCS_WEB_DIR=/var/www/html/docs

rsync \
    --recursive \
    --verbose \
    docs/_build/html/* \
    malawi-atlas:${DOCS_TEMPORARY_DIR};

ssh -t   malawi-atlas   "sudo mkdir -p ${DOCS_WEB_DIR} &&  sudo cp --verbose -r ${DOCS_TEMPORARY_DIR}/* ${DOCS_WEB_DIR}"