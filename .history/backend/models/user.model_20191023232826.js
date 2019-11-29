const mongoose = require('mongoose');
//cosnt Schema = mongoose.Schema;
const Schema = mongoose.Schema;

// note that it contains only 1 field but it can contain more
const userSchema = new Schema({
  username: {
    // validation
    type: String,
    required: true,
    unique: true,
    trim: true, // will trim whitespace of the end 
    minlength: 3
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;