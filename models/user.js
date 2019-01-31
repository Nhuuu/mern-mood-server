const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 99
  },
  email: { // TODO: Need to add email validation
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 99
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 99
  }
});

// Override 'toJSON' to prevent the password from being returned with the user
userSchema.set('toJSON', {
  transform: (doc, user) => {
    const userJson = {
      id: user._id,
      email: user.email,
      name: user.name
    }
    return userJson;
  }
});

// A helper function to authenticate with bcrypt
userSchema.methods.isAuthenticated = function(password){
  return bcrypt.compareSync(password, this.password)
}

// Find out Mongoose's version of a beforeCreate hook; use to hash password
userSchema.pre('save', function(next){
  this.password = bcrypt.hashSync(this.password, 12)
  next()
})

// Exporting the User model
module.exports = mongoose.model('User', userSchema);
