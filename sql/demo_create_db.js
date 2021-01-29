var mysql = require('mysql');

const config = require('../mysql-login.json')

console.log(config)

var con = mysql.createConnection({
  host: config.host,
  user: config.user,
  port: "3306",
  password: config.password
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE web", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
  
  con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
  });

});

