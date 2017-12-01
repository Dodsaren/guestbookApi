var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Comment = require('./api/models/commentModel'),
    cors = require('cors'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Guestbookdb', {
  useMongoClient: true
});

// cors({credentials: true, origin: true})
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(function(req, res, next) {
  console.log(req.originalUrl)
  console.log(req.body)
  next();
});

var routes = require('./api/routes/guestbookRoutes');
routes(app);

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Jimbos guestbook api started on: ' + port);