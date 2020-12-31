const mysql = require('mysql2/promise');

const params =   {  host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  
  }

  

const pool = mysql.createPool(params);


module.exports = pool;