const db = require('../database/dbconnection.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './client/dist'))

app.get('/rooms/01', (req, res) => {
  db.findOne((err, result) => {
    if(err) {
      console.log('there was an error retreiving data from the database', err);
      throw err;
    } else {
      console.log('i am a get function');
      res.send(result);
    }
  });
});

var PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`You are listening on port ${PORT}!`)
});

