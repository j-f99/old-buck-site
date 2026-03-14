#!/bin/bash
# cleanup.sh
echo "Stopping any running node processes..."
killall node || true
echo "Deleting node_modules and locks..."
sudo rm -rf node_modules package-lock.json .next
echo "Clearing npm cache..."
sudo npm cache clean --force
echo "Reinstalling dependencies..."
npm install
echo "Starting dev server..."
npm run dev
