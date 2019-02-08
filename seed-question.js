
const db = require('./models');

  db.Question.create({
    question:{
      mental: [
        {question: "Mental Question 1"},
        {question: "Mental Question 2"}
        //add questions here in same format as above
      ],
      physical: [
        {question: "Physical Question 1"},
        {question: "Physical Question 2"}
        //add questions here in same format as above
      ],
      emotional: [
        {question: "Emotional Question 1"},
        {question: "Emotional Question 2"}
        //add questions here in same format as above
      ]
    }
  })
  .then(result => {
    console.log('successfully created Logged Questions');
    process.exit();
  })
  .catch(err => {
    console.log('Error Message', err);
  });

