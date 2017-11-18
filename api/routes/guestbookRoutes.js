'use strict'
import guestBook from '../controllers/guestbookController';
const guestbook = require('../controllers/guestbookController');

export default (app) => {
  console.log(guestbook);
  app.route('/comments')
    .get(guestbook.list)
    .post(guestbook.add)

  app.route('/comments/:commentId')
    .get(guestbook.get)
    .put(guestbook.update)
    .delete(guestbook.delete)
}