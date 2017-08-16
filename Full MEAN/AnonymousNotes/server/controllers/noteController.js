var mongoose = require('mongoose');
var Note = mongoose.model('Note')

module.exports = {
    index: function(request, response) {
        Note.find({}, function(error, notes) {
            if(!error) {
                response.json(notes)
            }else{
                console.log(error);
                response.json(error)
            }
        }).sort({createdAt:-1});
    },

    create: function(request, response) {
        Note.create(request.body, function(error) {
            if(!error) {
                console.log('successfull!');
                response.json(true)
            }else{
                console.log(error);
                response.json(error)
            }
        })
    }
}
