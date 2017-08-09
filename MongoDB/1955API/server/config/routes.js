var mongoose = require('mongoose');
var User = mongoose.model('User')
var users = require('../controllers/controller.js');

module.exports = function(app){
app.get('/', function(request, response){
    users.index(request, response)
})

app.get('/new/:name', function(request, response) {
    users.create(request, response)
})

app.get('/remove/:name', function(request, response) {
    users.delete(request, response)
})

app.get('/:name', function(request, response) {
    users.show(request, response)
})
}
