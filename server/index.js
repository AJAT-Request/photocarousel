const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const db = require('../database/dbconnection.js');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());

let currentRoom = null;

app.get('/rooms/photos/', (req, res) => {
  db.Listing.findOne({ id: currentRoom }, (err, result) => {
    if (err) {
      console.log(err, 'this was an error in fetching data from the database');
    } else {
      res.send(result);
    }
  });
});

app.get('/rooms/:id', (req, res) => {
  currentRoom = req.params.id
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`You are listening on port ${PORT}!`);
});
