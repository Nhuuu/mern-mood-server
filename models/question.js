// Require Mongoose node module
const mongoose = require('mongoose');

// Questino Schema
const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
})

// TODO: Export Museum Model
module.exports = mongoose.model('Question', questionSchema); 