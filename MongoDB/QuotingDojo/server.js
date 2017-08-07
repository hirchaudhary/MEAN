var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting');
mongoose.Promise = global.Promise;
var moment = require('moment');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var Quote = mongoose.model('Quote', new mongoose.Schema({name: String, quote: String}, {timestamps:true}))

app.get('/', function(request, response){
    response.render('index');
})

app.get('/quotes', function(request, response) {
    Quote.find({}, function(error, quotes) {
        if(error) {
            console.log('error');
        } else {
            response.render('quotes', {'quotes': quotes, 'moment': moment});
        }
    })
})

app.post('/quotes', function(request, response) {
    Quote.create(request.body, function(error) {
    if(error) {
        console.log('something went wrong');
    } else {
        console.log('successfully added a quote!');
        response.redirect('/quotes');
    }
    })
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})
