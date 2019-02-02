const db = require('./models');



db.Museum.create({
  name: 'Musée du Louvre',
  city: 'Paris',
  country: 'France',
  image: 'https://theworldismymuseum.files.wordpress.com/2016/07/51.jpg?w=806&h=400&crop=1'
})
.then(result => {
  console.log('Created the Louvre');
  db.Piece.create({
    name: 'Mona Lisa',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1024px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    originCountry: 'Italy',
    museum: result._id,
    creator: {
      firstname: 'Leonardo',
      lastname: 'da Vinci',
      image: 'http://www.leonardodavinci.net/images/leonardo-da-vinci.jpg',
      birthyear: 1452,
      deathyear: 1519
    }
  })
  .then(result => {
    console.log('successfully created Mona Lisa');
    process.exit();
  })
  .catch(err => {
    console.log('Error Message', err);
  });
})
.catch(err => {
  console.log('Error Message', err);
});

// process.exit();
