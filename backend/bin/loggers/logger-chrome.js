/* App wide logger */
const bunyan = require('bunyan');
const obj = {};

/* Create logger if it doesn't exist */
if (!obj.log) {
  obj.log = bunyan.createLogger({ name: 'BunnyAPI-Chrome' });
}

/* Export the logger */
module.exports = obj.log;
