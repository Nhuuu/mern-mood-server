// Require Mongoose node module
const mongoose = require('mongoose');

// Question Schema
const answerSchema = new mongoose.Schema({
  score: Number,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  timestamp: { type: Date, default: Date.now},
})

module.exports = mongoose.model('Answer', answerSchema);