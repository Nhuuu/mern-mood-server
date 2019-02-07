const db = require('./models');

db.Question1.create({
    mental: [
      {question: "Sample Question 1"},
      {question: "Sample Question 2"}
      //add questions here in same format as above
    ]
})
.then(result => {
  console.log('successfully created Logged Questions');
  process.exit();
})
.catch(err => {
  console.log('Error Message', err);
});

