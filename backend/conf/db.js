#!/usr/bin/env node
/* ---- BunnyAPI ----
* @Author: Daniel W. Anner
*/
const log = require('../bin/loggers/logger-app');
const mysql = require('mysql');
const dbDetails = require('/var/www_conf/BunnyAPI/db_conf');

/* create our mysql connection */
const db = mysql.createConnection({
  host: dbDetails.host,
  user: dbDetails.user,
  password: dbDetails.password,
  database: dbDetails.database,
});

/* attempt to connect to the database */
db.connect((err) => {
  if (err) {
    throw err;
  }
  log.info('Connected to database');
});

/* make the database connection & the secret accessable to the global project */
global.db = db;
global.dbSecret= dbDetails.secret;
