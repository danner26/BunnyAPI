const express = require('express');

const router = express.Router();
const fs = require('fs');

/* Get just the Resume Users Name */
router.post('/submitChromeCreds', function(req, res, next) {
  const query = 'SELECT name FROM resume_main WHERE id = 1';

  db.query(query, function(err, name) {
    if (err) return next(err);
    res.json(name);
  });
});

/* Export the router */
module.exports = router;

