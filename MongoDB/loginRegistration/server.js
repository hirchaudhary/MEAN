var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var path        = require('path');
let session  = require("express-session");

require('./server/config/mongoose.js');
require('./server/config/routes.js');
mongoose.Promise = global.Promise;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './client/views'));
app.use(express.static(__dirname + "/client/static"));
app.use(session({secret:"reasonstohidethiskeyisyou"}));
app.listen(8000)
app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);
