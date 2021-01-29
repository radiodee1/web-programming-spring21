docker pull mysql/mysql-server:5.6.42
docker run --name=mysql1 -e MYSQL_ROOT_HOST=% -e MYSQL_ROOT_PASSWORD=droptest1 -d mysql/mysql-server:5.6.42 
docker start mysql1 
echo
ip a | grep docker | grep inet

docker inspect mysql1 | grep IPAddress

docker ps