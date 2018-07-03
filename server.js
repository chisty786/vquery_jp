// Get required modules
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var flash = require('connect-flash');


// Specify configurations
var db = require('./config/db');
var models = require('./app/models/models.js');
var jobDao = require('./app/dao/JobsDao.js');
var userDao = require('./app/dao/UserProfileDao.js');
var port = process.env.PORT || 5001; 
console.log('connecting db ' + db.url); 
console.log(mongoose);							// set our port
mongoose.connect(db.url); 										// connect to our mongoDB database


// Get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); 			// parse application/x-www-form-urlencoded
app.use(cookieParser());
app.use(methodOverride('X-HTTP-Method-Override')); 				// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); 				// set the static files location /public/img will be /img for users
app.use(session({ secret: 'swapnilguptajobs' })); 				// session secret
app.use(passport.initialize());
app.use(passport.session()); 									// persistent login sessions
app.use(morgan('dev')); 										// log every request to the console
app.use(flash());


// Configure routes
require('./config/passport')(passport);
require('./app/routes')(app, passport); 						// pass our application into our routes


// Start our app !!
app.listen(port);	
console.log('Magic happens on port ' + port); 					// shoutout to the user
exports = module.exports = app; 								// expose app
