const db = require('./models');

  db.Sayingnorm.create({
    output:{
      clearday: [
        {output: "It’s clear that you should go frolic in the field like a gazelle"}
      ],
      clearnight: [
        {output: "It’s clear that you should go frolic in the field like a gazelle"}
      ],
      rain: [
        {output: "Is it raining outside or is bucket size water dropping? Either way grab a baseball bat Slugger!"},
        {output: "Rain drops so huge, you could freeze it and make igloos"},
        {output: "Have you ever played in the rain? You would totally win!"} //this will be profanity
        //add outputs here in same format as above
      ],
      snow: [
        {output: "You, Me and OLAF should build a snowman!!!"},
        {output: "It’s so cold outside! Do you wanna build a snowman? ...soon?"},
        {output: "Snuggle?"},
        {output: "Let’s make some Hot Chocolate, gather around the fire and tell ghost stories!"}
      ],
      sleet: [
        {output: "Sleet"}
      ],
      wind: [
        {output: "Life is a comprised of fleeting moments, don’t let the wind blow them away!"}
      ],
      fog: [
        {output: "Fog"}
      ],
      cloudy: [
        {output: "Sample output 1"},
        {output: "Sample output 2"} //this will be profanity
        //add outputs here in same format as above
      ],
      partlycloudyday: [
        {output: "Is it cloudy outside or is the monster from Stranger Things coming"}
      ],
      partlycloudynight: [
        {output: "Is it cloudy outside or is the monster from Stranger Things coming"}
      ],

    }
  })
  .then(result => {
    console.log('successfully created Logged outputs');
    process.exit();
  })
  .catch(err => {
    console.log('Error Message', err);
  });

