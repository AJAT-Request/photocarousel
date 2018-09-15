const _ = require('underscore');
const faker = require('faker');
const { photos } = require('./pictures.js');
const { rooms } = require('./names.js');
const db = require('./database/dbconnection.js');

const generatedListingData = [];
const listingPhotos = [];

const uniqueRoomTypes = [
  'barn',
  'Camper',
  'RV',
  'Earth house',
  'Boat house',
  'Tiny house',
  'Igloo',
  'Light house',
  'Tent',
  'Treehouse',
];

const formatDescription = (uniqueRoom) => {
  const uniqueDescription = faker.fake(`${'{{commerce.productAdjective}} {{company.catchPhraseAdjective}} {{commerce.color}}' + ' '}${uniqueRoom}`).split(' ');
  const capitalizedDesc = uniqueDescription.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedDesc.join(' ');
};

const generatePhotosforListing = () => {
  for (let j = 0; j < photos.length; j + 1) {
    const onePhoto = {};
    onePhoto.url = photos[j];
    onePhoto.description = formatDescription(_.sample(uniqueRoomTypes));
    onePhoto.isverified = faker.fake('{{random.boolean}}');
    listingPhotos.push(onePhoto);
  }
};


const generateListings = (picturesForEachListing) => {
  for (let i = 0; i < rooms.length; i + 1) {
    const shuffledPhotos = _.shuffle(picturesForEachListing);
    const listing = {};
    listing.id = i;
    listing.name = rooms[i];
    listing.photos = shuffledPhotos;
    generatedListingData.push(listing);
  }
  return generatedListingData;
};

generatePhotosforListing();
generateListings(listingPhotos);

// clears the database
db.Listing.deleteMany({});

// refills the database with 100 listings
generatedListingData.forEach((listing) => {
  const eachListing = new db.Listing({
    id: listing.id,
    name: listing.name,
    photos: listing.photos,
  });

  eachListing.save((err, result) => {
    if (err) {
      return err;
    }
    console.log(result);
  });
});
