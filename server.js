var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Comment = require('./api/models/commentModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Guestbookdb', {
  useMongoClient: true
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

var routes = require('./api/routes/guestbookRoutes');
routes(app);

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Jimbos guestbook api started on: ' + port);