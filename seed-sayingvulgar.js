const db = require('./models');

  db.Sayingvulgar.create({
    output:{
      clearday: [
        {output: "It’s so fucking clear outside that I can already see me winning"},
        {output: "Who needs morphine when you got weather like this!"}
      ],
      clearnight: [
        {output: "It’s so fucking clear outside that I can already see me winning"}
      ],
      rain: [
        {output: "It’s fucking rainy outside right now, But YOU GOT THIS!"},
        {output: "You need a fucking umbrella -ella -ella -ella"},
        {output: "I’d rather catch a grenade than be in this fucking rain"}
      ],
      snow: [
        {output: "It’s colder than a room full of girls who you like but don’t like you back"},
        {output: "It’s so fucking nippy outside. Throw on a sweater and you’re golden bro."}
      ],
      sleet: [
        {output: "Fucking Sleet"}
      ],
      wind: [
        {output: "Fucking Windy"}
      ],
      fog: [
        {output: "Fog is like M.A.T.H. -Mental Abuse To Humans"}
      ],
      cloudy: [
        {output: "Fucking Cloudy"}
      ],
      partlycloudyday: [
        {output: "Pretty fucking cloudy out there"}
      ],
      partlycloudynight: [
        {output: "Pretty fucking cloudy out there"}
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

