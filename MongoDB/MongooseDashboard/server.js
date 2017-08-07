var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animals');
mongoose.Promise = global.Promise;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var Animal = mongoose.model('Animal', new mongoose.Schema({name: String, legs: Number, color: String}, {timestamps:true}))

app.get('/', function(request, response){
    Animal.find({}, function(error, animals) {
        if(error) {
            console.log('error');
        } else {
            response.render('index', {'animals': animals});
        }
    })
})

app.get('/new', function(request, response) {
    response.render('new');
})

app.get('/about/:id', function(request, response) {
    let animal = Animal.findOne({_id: request.params.id}, function(errors, one){
        if(errors) {
            console.log('something went wrong');
        } else {
            console.log('successfull!');
            response.render('about', {animal: one});
        }
    })
})

app.post('/new', function(request, response) {
    Animal.create(request.body, function(error) {
        if(error) {
            console.log('something went wrong');
        } else {
            console.log('successfully added a animal!');
            response.redirect('/');
        }
    })
})

app.get('/edit/:id', function(request, response) {
    let animal = Animal.findOne({_id: request.params.id}, function(errors, one){
        if(errors) {
            console.log('something went wrong');
        } else {
            console.log('successfull!');
            response.render('edit', {animal: one});
        }
    })
})

app.post('/edit/:id', function(request, response) {
    Animal.findOneAndUpdate({ _id: request.params.id }, request.body, function(error){
        if(error) {
            console.log('something went wrong');
        } else {
            console.log('successfully added a animal!');
            response.redirect('/');
        }
    })
})

app.get('/delete/:id', function(request, response){
    Animal.remove({_id: request.params.id}, function(error) {
        response.redirect('/');
    })
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})
