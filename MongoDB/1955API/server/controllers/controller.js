var mongoose = require('mongoose');
var User = mongoose.model('User')

module.exports = {
    index: function(request, response) {
        User.find({}, function(error, users) {
            response.json(users);
        })
    },
    show: function(request, response){
        User.findOne({name: request.params.name}, function(errors, one){
            response.json(one);
        })
    },
    create: function(request, response) {
        User.create({name: request.params.name}, function(error) {
            if(error) {
                console.log('something went wrong');
                response.redirect('/');
            } else {
                console.log('successfull!');
                response.redirect('/');
            }
        })
    },
    delete: function(request, response){
        User.remove({name: request.params.name}, function(error) {
            if(error){
                response.json("User not found")
            }else{
                response.redirect('/');
            }
        })
    }
}
