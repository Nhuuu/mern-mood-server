const db = require('./models');

  db.Sayingvulgar.create({
    output:{
      clearday: [
        {output: "Sample output 1"},
        {output: "Sample output 2"} //this will be profanity
        //add outputs here in same format as above
      ],
      clearnight: [
        {output: "Sample output 1"},
        {output: "Sample output 2"} //this will be profanity
        //add outputs here in same format as above
      ],
      rain: [
        {output: "Sample output 1"},
        {output: "Sample output 2"} //this will be profanity
        //add outputs here in same format as above
      ],
      snow: [
        {output: "Sample output 1"},
        {output: "Sample output 2"} //this will be profanity
        //add outputs here in same format as above
      ],
      sleet: [
        {output: "Sample output 1"},
        {output: "Sample output 2"} //this will be profanity
        //add outputs here in same format as above
      ],
      wind: [
        {output: "Sample output 1"},
        {output: "Sample output 2"} //this will be profanity
        //add outputs here in same format as above
      ],
      fog: [
        {output: "Sample output 1"},
        {output: "Sample output 2"} //this will be profanity
        //add outputs here in same format as above
      ],
      cloudy: [
        {output: "Sample output 1"},
        {output: "Sample output 2"} //this will be profanity
        //add outputs here in same format as above
      ],
      partlycloudyday: [
        {output: "Sample output 1"},
        {output: "Sample output 2"} //this will be profanity
        //add outputs here in same format as above
      ],
      partlycloudynight: [
        {output: "Sample output 1"},
        {output: "Sample output 2"} //this will be profanity
        //add outputs here in same format as above
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

