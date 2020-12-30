require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Stock API." });
});


const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB
});



connection.query(
  "select * from stocks where ticker like 'ACB'",
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);



// set port, listen for requests
app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
