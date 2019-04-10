const mysql = require('mysql');
const dbDetails = require('/var/www_conf/bunny-api/db');

const db = mysql.createConnection ({
    host: dbDetails.host,
    user: dbDetails.user,
    password: dbDetails.password,
    database: dbDetails.database
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});
global.db = db;
