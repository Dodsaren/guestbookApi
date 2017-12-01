'use strice'

const mongoose = require('mongoose'),
      Comment = mongoose.model('Comments');

exports.list = (req, res) => {
  Comment.find({}).sort('-createdDate').exec((err, comment) => {
    if (err) return res.send(err);
    res.json(comment)
  });
}

exports.add = (req, res) => {
  const comment = new Comment(req.body);
  Comment.create(comment, (err, created) => {
    if (err) return res.send(err);
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
  if (true) return res.status(401).send({ message: 'Nein' })
  Comment.findOneAndUpdate({_id: req.params.commentId}, req.body, (err, comment) => {
    if (err) res.send(err);
    res.json(comment);
  });
}

exports.delete = (req, res) => {
  if (true) return res.status(401).send({ message: 'Nein' })
  Comment.findOneAndRemove({
    _id: req.params.commentId
  }, function(err, comment) {
    if (err) return res.send(err);
    if (!comment) return res.json({ message: 'Comment not found' })
    res.json({ message: 'Comment successfully deleted', comment });
  });
}
