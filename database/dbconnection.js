const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photocarousel');

const listingSchema = new mongoose.Schema({
  id: { type: Number },
  name: String,
  photos: [{
    url: { type: String, useNewUrlParser: true },
    description: String,
    isverified: { type: Boolean, default: true },
  }],
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = {
  Listing,
};
