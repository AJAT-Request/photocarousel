const generatedListing = require('./pictures.js');
const generatedListings = require('./names.js');
const _ = require('underscore');
const faker = require('faker');

let generatedListingData = [];

let uniqueRoomTypes = [
  'barn',
  'Camper',
  'RV',
  'Earth house',
  'Boat house',
  'Tiny house',
  'Igloo',
  'Light house',
  'Tent',
  'Treehouse'
];

let rooms = generatedListings.rooms;
let listingPhotosData = generatedListing.pictures;
let listingPhotos = [];

let formatDescription = (uniqueRoom) => {
  let uniqueDescription = faker.fake("{{commerce.productAdjective}} {{company.catchPhraseAdjective}} {{commerce.color}}"  + ' ' +  uniqueRoom).split(' ');
  let capitalizedDesc = uniqueDescription.map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedDesc.join(' ')
  }
  
  let generatePhotosforListing = () => {
    for (var j = 0; j < listingPhotosData.length; j++) {
      let onePhoto = {};
      onePhoto.url = listingPhotosData[j];
      onePhoto.description = formatDescription(_.sample(uniqueRoomTypes));
      onePhoto.isverified = faker.fake("{{random.boolean}}")
      listingPhotos.push(onePhoto);
    }
    return _.shuffle(listingPhotos);
  }
  
  
  let generateListings = () => {
    let photos = generatePhotosforListing();
    for (let i = 0; i < rooms.length; i++) {
      let listing = {};
      listing.id = i;
      listing.name = rooms[i];
      listing.photos = photos;
      console.log(listing)
      // generatedListingData.push(listing);
    }
  }

  // generateListings();


  
  
  
  console.log(generateListings());