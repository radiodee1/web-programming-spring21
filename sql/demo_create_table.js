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


/* 
profiles: basic user data
entered in 'sign-up' form
----
id
firstname (name)
lastname (name)
address (info)
city (info)
state (info)
zip (info)
email (info)
username (name)
password (password)
*/
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

  /* 
  exercises: recording of single exercise repetition
  entered in some user form
  ----
  id
  exercise_name (something like 'push-ups')
  repititions (a number like '1' or '5')
  unit_name (a dropdown like 'reps', or 'miles', or 'km')
  date (a date timestamp)
  complete (a boolean or enumeration for whether an exercise is done)
  from_user_id (the user id of the exerciser)
  */
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
  /* 
  workout: a table for lists of exercises
  constructed days after exercises are recorded by user
  ----
  id
  date
  workout_id (can be any id from one of the linked exercises)
  from_user_id (user)
  exercise_id (many of these -- link to exercises)
  */
  console.log("Connected!");
  var sql = "CREATE TABLE workout (id INT AUTO_INCREMENT PRIMARY KEY, " +
  "date TIMESTAMP, workout_id INT, " + 
  "from_user_id INT, exercise_id INT " + 
  
  " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table workout created");
  });

  /* 
  friends: a table for friend connections
  constructed after user picks frinds, queried for friend suggestions
  ----
  id
  user_id (user)
  friend_user_id (associated friend)
  date (date of association start)
  */
  console.log("Connected!");
  var sql = "CREATE TABLE friends (id INT AUTO_INCREMENT PRIMARY KEY, " +
  "user_id INT, friend_user_id INT, " + 
  "date TIMESTAMP " + 
  
  " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table friends created");
  });

  /*
  messages: a table of messages between users
  entered in some user form
  ----
  id
  from_user_id (source for message)
  to_user_id (destination and key to search on)
  message (actual text of message)
  date (date message was sent) 
  */
  console.log("Connected!");
  var sql = "CREATE TABLE messages (id INT AUTO_INCREMENT PRIMARY KEY, " +
  "from_user_id INT, to_user_id INT, " + 
  "message VARCHAR(255), date TIMESTAMP " + 

  " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table messages created");
  });

  /*
  posts: organize post list to search for
  constructed as posts are generated
  ----
  id
  table_name (enum for what kind of post 'messages'/'exercise'/'workout' )
  table_id (num copied from table id of messages/exercise/workout)
  date (date of post)
  from_user_id (num copied from user id -and- search key)
  */
  console.log("Connected!");
  var sql = "CREATE TABLE posts (id INT AUTO_INCREMENT PRIMARY KEY, " +
  "table_name VARCHAR(255), table_id INT, " + 
  "date TIMESTAMP, from_user_id INT " + 
  
  " )";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table posts created");
  });

  /*
  likes: list of likes from associated friends
  connected with some kind of post
  ----
  id
  post_id (num copied from post id)
  from_user_id (num copied from num id)
  */
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

