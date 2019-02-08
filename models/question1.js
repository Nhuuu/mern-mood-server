const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  mental: {
    type: String,
    minlength: 1,
    maxlength: 99
  }
});

module.exports = mongoose.model('Question1', questionSchema);
