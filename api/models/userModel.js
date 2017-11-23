'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: 'Your username',
    unique: true
  },
  message: {
    type: String,
    required: 'Your password'
  },
  role: {
    type: String,
    enum: ['ADMIN', 'USER'],
  }
});

module.exports = mongoose.model('Users', UserSchema);