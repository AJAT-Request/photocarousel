const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const db = require('../database/dbconnection.js');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());

app.get('/rooms/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  db.Listing.findOne({ id }, (err, result) => {
    if (err) {
      console.log(err, 'this was an error in fetching data from the database');
    } else {
      console.log(result);
      res.send(result);
    }
  });
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`You are listening on port ${PORT}!`);
});
