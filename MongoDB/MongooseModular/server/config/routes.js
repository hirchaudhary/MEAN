var mongoose = require('mongoose');
var Animal = mongoose.model('Animal')
var animals = require('../controllers/animals.js');

module.exports = function(app){
app.get('/', function(request, response){
    animals.index(request, response)
})

app.get('/new', function(request, response) {
    response.render('new');
})

app.get('/about/:id', function(request, response) {
    animals.show(request, response)
})

app.post('/new', function(request, response) {
    animals.create(request, response)
})

app.get('/edit/:id', function(request, response) {
    animals.editPage(request, response)
})

app.post('/edit/:id', function(request, response) {
    animals.edit(request, response)
})

app.get('/delete/:id', function(request, response){
    animals.delete(request, response)
})
}
