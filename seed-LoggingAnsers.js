const db = require('./models');

db.User.findOne({
  // Simulating (currentUser) scenario
  // where 'Tester1' is assumed as exiting and logged in
  name: 'Tester1' 
  })
  .then(result => {
    // User submits 3 answers and logs the results to userId in User DB
    db.Answer.create({
      score: 5,
      category: 'mental',
      userId: result._id
  }, {
      score: 9,
      category: 'phyical',
      userId: result._id
  }, {
      score: 1,
      category: 'emotional',
      userId: result._id
})
  .then(result => {
    console.log('successfully created Logged Answers');
    process.exit();
  })
  .catch(err => {
    console.log('Error Message', err);
  });
})
.catch(err => {
  console.log('Error Message', err);
});
