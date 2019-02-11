const mongoose = require('mongoose');

const cleardaySchema = new mongoose.Schema({
  output: {
    type: String,
    minlength: 1,
    maxlength: 200
  }
});

const clearnightSchema = new mongoose.Schema({
  output: {
    type: String,
    minlength: 1,
    maxlength: 200
  }
});

const rainSchema = new mongoose.Schema({
  output: {
    type: String,
    minlength: 1,
    maxlength: 200
  }
});

const snowSchema = new mongoose.Schema({
  output: {
    type: String,
    minlength: 1,
    maxlength: 200
  }
});

const sleetSchema = new mongoose.Schema({
  output: {
    type: String,
    minlength: 1,
    maxlength: 200
  }
});

const windSchema = new mongoose.Schema({
  output: {
    type: String,
    minlength: 1,
    maxlength: 200
  }
});

const fogSchema = new mongoose.Schema({
  output: {
    type: String,
    minlength: 1,
    maxlength: 200
  }
});

const cloudySchema = new mongoose.Schema({
  output: {
    type: String,
    minlength: 1,
    maxlength: 200
  }
});

const partlycloudydaySchema = new mongoose.Schema({
  output: {
    type: String,
    minlength: 1,
    maxlength: 200
  }
});

const partlycloudynightSchema = new mongoose.Schema({
  output: {
    type: String,
    minlength: 1,
    maxlength: 200
  }
});

const sayingnormSchema = new mongoose.Schema({
  output: {
    clearday: [cleardaySchema],
    clearnight: [clearnightSchema],
    rain: [rainSchema],
    snow: [snowSchema],
    sleet: [sleetSchema],
    wind: [windSchema],
    fog: [fogSchema],
    cloudy: [cloudySchema],
    partlycloudyday: [partlycloudydaySchema],
    partlycloudynight: [partlycloudynightSchema],
  }
});

module.exports = mongoose.model('Sayingnorm', sayingnormSchema);
