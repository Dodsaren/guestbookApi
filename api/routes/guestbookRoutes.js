'use strict'

const guestbook = require('../controllers/guestbookController');

module.exports = (app) => {
  console.log(guestbook);
  app.route('/comments')
    .get(guestbook.list)
    .post(guestbook.add)

  app.route('/comments/:commentId')
    .get(guestbook.get)
    .put(guestbook.update)
    .delete(guestbook.delete)
}