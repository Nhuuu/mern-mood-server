const db = require('./models');

db.Moodquestion.create({
    questions: [
      {question: "Sample Question 1"},
      {question: "Sample Question 2"},
      {question: "Sample Question 3"},
      {question: "Sample Question 4"}
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

