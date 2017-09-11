const router = require('express').Router();

/* GET home page. */
router.get('/', function __getIndex(req, res, next) {
    res.render('index', {title: 'Express'});
});

// finds the index.js in each folder
const users = require('./users');
const flights = require('./flights');
const models = require('./models');
const cars = require('./cars');
const books = require('./books');

// glue all the routes to the main router
// call these routes for all htpp requests (get, put, post, delete etc).
router.use('/users', users);
router.use('/flights', flights);
router.use('/models', models);
router.use('/cars', cars);
router.use('/bookstore', books);

module.exports = router;
