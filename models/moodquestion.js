const mongoose = require('mongoose');

const MoodquestionSchema = new mongoose.Schema({
  questions: [{
    question: {
      type: String,
      minlength: 1,
      maxlength: 99
    }
  }]
  
});

module.exports = mongoose.model('Moodquestion', MoodquestionSchema);
