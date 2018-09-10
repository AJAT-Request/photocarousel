const express = require('express');
const app = express();

app.use(express.static(__dirname + './client/dist'))

app.get('', (req, res) => {
  res.send('hello')
});

var PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`You are listening on port ${PORT}!`)
});