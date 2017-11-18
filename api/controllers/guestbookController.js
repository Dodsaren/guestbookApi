'use strice'

const mongoose = require('mongoose'),
      Comment = mongoose.model('Comments');

exports.list = (req, res) => {
  Comment.find({}, (err, comment) => {
    if (err) res.send(err);
    res.json(comment)
  });
}
