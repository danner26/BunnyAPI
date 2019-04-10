const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const chrome = require('./routes/chrome');
const cookieParser = require('cookie-parser');
require('/var/www_conf/bunny-api/db');

/* Let app use bodyParser */
app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

/* Let app use cookieParser */
app.use(cookieParser());
app.use(function(req, res, next) { // Set the Access Controls
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

/* Create the routes */
app.use('/chrome', chrome);

/* Export the app */
module.exports = app;
