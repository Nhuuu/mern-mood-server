
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
<<<<<<< HEAD


=======
>>>>>>> 64ac8a3c6ee0bd47fe9124857e072c05dfc4d29f
  })
  .then(result => {
    console.log('successfully created Logged Questions');
    process.exit();
  })
  .catch(err => {
    console.log('Error Message', err);
  });

