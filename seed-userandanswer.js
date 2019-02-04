const db = require('./models');

db.User.create({
  name: 'Tester1',
  email: 'tester1@test.com',
  password: '12345678',
  location: 'seattle',
  myanswer: null
  })
  .then(result => {
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
