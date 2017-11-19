'use strice'

const mongoose = require('mongoose'),
      Comment = mongoose.model('Comments');

exports.list = (req, res) => {
  Comment.find({}, (err, comment) => {
    if (err) res.send(err);
    res.json(comment)
  });
}

exports.add = (req, res) => {
  const comment = new Comment(req.body);
  Comment.create(comment, (err, created) => {
    if (err) res.send(err);
    res.json(created)
  });
}

exports.get = (req, res) => {
  Comment.findById(req.params.commentId, function(err, comment) {
    if (err) res.send(err);
    res.json(comment);
  });
}

exports.update = (req, res) => {
  Comment.findOneAndUpdate({_id: req.params.commentId}, req.body, {new: true}, function(err, comment) {
    if (err) res.send(err);
    res.json(comment);
  });
}

exports.delete = (req, res) => {
  Comment.remove({
    _id: req.params.commentId
  }, function(err, comment) {
    if (err) res.send(err);
    res.json({ message: 'Comment successfully deleted' });
  });
}