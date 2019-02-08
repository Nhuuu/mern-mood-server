// Mongoose require and connect
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/salty',
  { useNewUrlParser: true });

// Deprecation warning: https://github.com/Automattic/mongoose/issues/6922
mongoose.set('useCreateIndex', true);

// Include models from this folder
module.exports.User = require('./user');
module.exports.Answer = require('./answer');
module.exports.Question = require('./question');
module.exports.Sayingnorm = require('./sayingnorm');
module.exports.Sayingvulgar = require('./sayingvulgar');