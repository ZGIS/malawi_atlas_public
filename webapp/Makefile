WEBSITE_TEMPORARY_DIR=/home/gis-malawi/tmp/website_built/
WEBSITE_PUBLISH_DIR=/var/www/html/

format:
	prettier \
	  --trailing-comma none \
	  --write \
	  app

publish:
	rsync \
		--recursive \
		--verbose \
		--progress \
		--human-readable \
		build/production/MalawiAtlas/ \
		malawi-atlas:"${WEBSITE_TEMPORARY_DIR}";

	rsync \
		--recursive \
		--verbose \
		../docs/_build/html/* \
		malawi-atlas:"${WEBSITE_TEMPORARY_DIR}/docs";

	# "-t" flag is necessary for executing the sudo command
	ssh -t \
	malawi-atlas \
	"sudo rsync \
		--recursive \
		--verbose \
		--progress \
		--human-readable \
		--delete \
		\"${WEBSITE_TEMPORARY_DIR}\" \
		\"${WEBSITE_PUBLISH_DIR}\""

