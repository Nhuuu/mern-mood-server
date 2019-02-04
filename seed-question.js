
const db = require('./models');

  db.Question.create({
      mental: { 
          question: "How do you feel today?",
          question: "How are you today?",
    },
    physical: { 
      question: "How do you feel today?",
      question: "How are you today?",
}   
})
  .then(result => {
    console.log('successfully created Logged Questions');
    process.exit();
  })
  .catch(err => {
    console.log('Error Message', err);
  });

