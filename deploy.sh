##

cd app
zip -r web.zip *

scp -P2222  web.zip dragonh1@programhenry.com:~

ssh -p2222 -tt dragonh1@programhenry.com bash -c "'
mkdir ~/BACKUP_WEB
rm -rf ~/BACKUP_WEB/www
mkdir ~/BACKUP_WEB/www
mv ~/public_html/* ~/BACKUP_WEB/www/
unzip -od ~/public_html/ web.zip
rm web.zip
'"
rm web.zip
