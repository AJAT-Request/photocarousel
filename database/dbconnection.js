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

//clears the database
Listing.deleteMany({});

//refills the database with 100 listings
pregeneratedData.generatedListingData.forEach(listing => {
  let eachListing = new Listing({
    id: listing.id,
    name: listing.name,
    photos: listing.photos
  });
  eachListing.save();
});


let findOne = (callback) => {
  Listing.findOne({id: 1}).exec(callback);
  console.log('mongoose find function');
};

module.exports = {
  findOne
}