const pregeneratedData = require('../generateddata.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photocarousel');

const db = mongoose.connection;
db.once("open", () => console.log("MongoDB connected to nodeserver"));

const listingSchema = new mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  photos: [{
    url: String,
    description: String,
    isVerified: Boolean
  }]
});

let Listing = mongoose.model('Listing', listingSchema);

pregeneratedData.generatedListingData.forEach(listing => {
  let eachListing = new Listing({
    id: listing.id,
    name: listing.name,
    photos: listing.photos
  });
  eachListing.save();
});


let find = () => {
  console.log('mongoose find function');
};
// thinking about adding a new method to iterate through the photos array and then saving that to the 
// database. Not yet sure how to do that. I'll revisit this idea later


console.log(pregeneratedData.generatedListingData);

module.exports = {
  find
}