echo "Kill all the running PM2 actions"
pm2 kill

echo "Jump to app folder"
cd /home/ubuntu/FinancialPlayGroundApi

echo "Update app from Git"
git pull

echo "Install app dependencies"
rm -rf node_modules package-lock.json
npm install

echo "Build your app"
pm2 start server.js