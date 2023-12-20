const mongoose = require('mongoose'); // mongoose module

const Schema = mongoose.Schema; // schema variable

const userSchema = new Schema({ // user schema
  username: { 
    type: String, 
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true, // timestamps
});

const User = mongoose.model('User', userSchema); // user model

module.exports = User; // export User model 