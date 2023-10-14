const express = require('express');
const app = express();
const mongodb = require('./db/connection');
const cors = require('cors');
const port = process.env.PORT || 4000;

app.use(cors()).use(express.json()).use('/', require('./routes'));

mongodb.initDB((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
