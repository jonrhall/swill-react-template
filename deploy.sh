#!/bin/bash

read -p "CraftBeerPi3 Directory: "  cbpi_dir
deploy_dir="$cbpi_dir/modules/ui/static/custom"
echo "Directory to deploy to: $deploy_dir"
npm run build
echo "Copying /dist contents to deployment folder"
mkdir $deploy_dir
cp ./dist/* $deploy_dir
echo "Visit http://<<cbpi-server-address>>/ui/static/custom/index.html"
