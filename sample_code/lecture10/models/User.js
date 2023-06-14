const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  email: {
    type: String,
    validate: {
      validator: function (value) {
        return value.includes('@');
      }
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;