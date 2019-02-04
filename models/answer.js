// Require Mongoose node module
const mongoose = require('mongoose');

// Question Schema
const answerSchema = new mongoose.Schema({
  score: Number,
  category: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  average: Number,
  timestamp: { type: Date, default: Date.now},
})

module.exports = mongoose.model('Answer', answerSchema);