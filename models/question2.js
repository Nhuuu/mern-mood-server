const mongoose = require('mongoose');

const mentalSchema = new mongoose.Schema({
  question: {
    type: String,
    minlength: 1,
    maxlength: 99
  }
});

const physicalSchema = new mongoose.Schema({
  question: {
    type: String,
    minlength: 1,
    maxlength: 99
  }
});

const emotionalSchema = new mongoose.Schema({
  question: {
    type: String,
    minlength: 1,
    maxlength: 99
  }
});

const questionSchema = new mongoose.Schema({
  question: {
    mental: [mentalSchema],
    physical: [physicalSchema],
    emotional: [emotionalSchema],
  }
});

module.exports = mongoose.model('Question2', questionSchema);
