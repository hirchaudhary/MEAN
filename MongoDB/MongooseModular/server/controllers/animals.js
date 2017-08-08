var mongoose = require('mongoose');
var Animal = mongoose.model('Animal')

module.exports = {
    index: function(request, response) {
        Animal.find({}, function(error, animals) {
          if(error) {
              console.log('error');
          } else {
              response.render('index', {'animals': animals});
          }
        })
    },
    create: function(request, response) {
        Animal.create(request.body, function(error) {
            if(error) {
                console.log('something went wrong');
            } else {
                console.log('successfully added a animal!');
                response.redirect('/');
            }
        })
    },
    show: function(request, response){
        let animal = Animal.findOne({_id: request.params.id}, function(errors, one){
            if(errors) {
                console.log('something went wrong');
            } else {
                console.log('successfull!');
                response.render('about', {animal: one});
            }
        })
    },
    editPage: function(request, response){
        let animal = Animal.findOne({_id: request.params.id}, function(errors, one){
            if(errors) {
                console.log('something went wrong');
            } else {
                console.log('successfull!');
                response.render('edit', {animal: one});
            }
        })
    },
    edit: function(request, response){
        Animal.findOneAndUpdate({ _id: request.params.id }, request.body, function(error){
            if(error) {
                console.log('something went wrong');
            } else {
                console.log('successfully added a animal!');
                response.redirect('/');
            }
        })
    },
    delete: function(request, response){
        Animal.remove({_id: request.params.id}, function(error) {
            response.redirect('/');
        })
    }
}
