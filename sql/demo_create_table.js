var mysql = require('mysql');

const config = require('../mysql-login.json')

console.log(config)

var con = mysql.createConnection({
  host: config.host,
  user: config.user,
  port: config.port,
  password: config.password,
  database: "web"
});



con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE profiles (id INT AUTO_INCREMENT PRIMARY KEY, " +
  "firstname VARCHAR(255), lastname VARCHAR(255), " + 
  "address VARCHAR(255), city VARCHAR(255), " + 
  "state VARCHAR(255), zip VARCHAR(255), " + 
  "email VARCHAR(255), username VARCHAR(255), " + 
  "password VARCHAR(255)" + 
  // ", picture BLOB " + 
  " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table profiles created");
  });


  console.log("Connected!");
  var sql = "CREATE TABLE exercises (id INT AUTO_INCREMENT PRIMARY KEY, " +
  "exercise_name VARCHAR(255), repititions INT, " + 
  "unit_name VARCHAR(255), date TIMESTAMP, " + 
  "complete VARCHAR(255), from_user_id INT " + 
  
  " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table exercises created");
  });


  console.log("Connected!");
  var sql = "CREATE TABLE friends (id INT AUTO_INCREMENT PRIMARY KEY, " +
  "user_id INT, friend_user_id INT, " + 
  "date TIMESTAMP " + 
  
  " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table friends created");
  });

  console.log("Connected!");
  var sql = "CREATE TABLE messages (id INT AUTO_INCREMENT PRIMARY KEY, " +
  "from_user_id INT, to_user_id INT, " + 
  "message VARCHAR(255), date TIMESTAMP " + 

  " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table messages created");
  });

  console.log("Connected!");
  var sql = "CREATE TABLE posts (id INT AUTO_INCREMENT PRIMARY KEY, " +
  "table_name VARCHAR(255), table_id INT, " + 
  "date TIMESTAMP, from_user_id INT " + 
  
  " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table posts created");
  });

  console.log("Connected!");
  var sql = "CREATE TABLE likes (id INT AUTO_INCREMENT PRIMARY KEY, " +
  "post_id INT, from_user_id INT " + 
  
  " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table likes created");
  });


con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
});
});

