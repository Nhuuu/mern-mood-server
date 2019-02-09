const db = require('./models');

  db.Sayingnorm.create({
  
      partlycloudynight: {
        output: "Sample output 3"

    },
    partlycloudynight2: {
      output: "Sample output 3"
    }

  })
  .then(result => {
    console.log('successfully created Logged outputs');
    process.exit();
  })
  .catch(err => {
    console.log('Error Message', err);
  });

