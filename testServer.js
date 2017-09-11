let express = require('express');
let app = express();
let mongoose = require('mongoose');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let port = 8080;
let book = require('./routes/books/index');

let dbConn = {
    "DBHost": "mongodb://localhost/test"
};

//db options
let options = {
    server: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}},
    replset: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}}
};

//db connection      
mongoose.connect(dbConn.DBHost, options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//don't show the log when it is test
// if(config.util.getEnv('NODE_ENV') !== 'test') {
//use morgan to log at command line
app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
// }

//parse application/json and look for raw text                                        
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.use('/bookstore', book);

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing