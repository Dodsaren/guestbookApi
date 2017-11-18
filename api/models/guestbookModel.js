'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CommentSchema = new Schema({
  name: {
    type: String,
    required: 'Your name'
  },
  message: {
    type: String,
    required: 'Your message'
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Comments', CommentSchema);