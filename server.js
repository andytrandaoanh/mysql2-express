require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./models/db.js");

const app = express();

app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Stock API." });
});


  async function getTrans(){
  const connection = await pool.getConnection();

  try { 
      const [rows, fields] = await connection.execute('select * from transactions where dateseq = ? and ticker like ?',  [20201201, 'acb']);
      console.log(rows);
 
  } catch (err) {
      console.error("Error getting data:", err);
  }
  }

  getTrans();

  




// set port, listen for requests
app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
