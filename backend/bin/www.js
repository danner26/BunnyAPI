#!/usr/bin/env node
/* ---- BunnyAPI ----
 * @Author: Daniel W. Anner
 */
const log = require('./loggers/logger-app');
const app = require('../app');
const http = require('http');

/* Lock the port and hand it to express */
const port = normalizePort(process.env.PORT || '4001');
app.set('port', port);

/* Generate our HTTP server */
const server = http.createServer(app);

/** * START FUNCTIONS ***/
/* Normalize a port - [number, string, boolean] */
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // Named port
    return val;
  }

  if (port >= 0) {
    // Port = number
    return port;
  }

  return false;
}
/* Handle specific errors with 'friendlier' logs */
function logErrorHelper(error, bind) {
  switch (error.code) {
    case 'EACCES':
      log.fatal(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      log.fatal(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
/* HTTP Error Listener */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  logErrorHelper(error, bind);
}
/* Event listener for HTTP 'Listening' event */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  log.info('Listening on ' + bind);
}
/** * END FUNCTIONS ***/

/* Listen on port, on all interfaces */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

log.info('API Running on Port:' + port);
