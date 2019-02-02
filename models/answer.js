// Require Mongoose node module
const mongoose = require('mongoose');

// Questino Schema
const answerSchema = new mongoose.Schema({
  score: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  average: Number,
})

module.exports = mongoose.model('Answer', answerSchema); 

// Need to add association