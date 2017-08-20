var mongoose = require('mongoose');
var User = mongoose.model('User');
var Bicycle = mongoose.model('Bicycle');

module.exports = {
    createUser: function(request, response) {
        let errors = [];
        if(request.body.password != request.body.conf){
            errors.push("Password and confirm password must match")
        }
        User.find({email: request.body.email}, function(error, user){
            if(user.length > 0){
                errors.push("Email already exists");
                return response.status(400).json({errors:errors})
            }
            var user = new User(request.body)
            user.save(function(error) {
                if(!error) {
                    request.session.email = user.email;
                    request.session._id = user._id;
                    response.json(user);
                }else{
                    console.log(error);
                    response.status(400).json(errors, error);
                }
            })
        })   
    },

    login: function(request, response){
        User.findOne({email: request.body.username}, function(error, user) {
            if(user==null || error){ 
                return response.status(400).json(error)
            }else{ 
                if(!User.schema.methods.match(request.body.pass,user.password)){
                    response.status(400).json("Ivalid Credentials");
                }else{
                    request.session._id = user._id;
                    request.session.email   = user.email;
                    response.json(user);
                }
            }
        })
    },

    addBicycle: function(request, response) {
        var bicycle = new Bicycle(request.body);
        bicycle._user = request.session._id;
        bicycle.save(function(error){
            User.findOneAndUpdate({ _id: request.session._id }, { $push: { _bicycle: bicycle }},function(error){}) 
            if(error) {
                response.json(error);
            }else{
                response.json(bicycle); 
            } 
        })   
    },
 
    getUserBicycles: function(request, response) {
        Bicycle.find({_user:request.session._id}, function(error, bicycles) {
            if(!error) {
                response.json(bicycles)
            }else{
                response.json(error)
            }
        }).sort({createdAt:-1});
    },

    logout: function(request, response){
        console.log("hit")
        if(request.session._id != null){
            request.session._id = null;
            request.session.email = null;
            response.json("logged out")
        }
    },

    delete:function(request,response){
        User.findOneAndUpdate({ _id: request.session._id }, { $pull: { _bicycle: request.body.id }}, function(error){
            Bicycle.remove({_id: request.body.id}, function(error) {
                if(!error) {
                    response.json("deleted")
                }else{
                    response.json(error)
                }
            })
        })
    },

    getBicycle:function(request, response){
        Bicycle.findOne({ _id: request.params.id }, function(error, bicycle){
            if(error) {
                console.log(error);
            } else {
                response.json(bicycle);
            }
        })
    },

    editBicycle: function(request, response) {
        Bicycle.findOneAndUpdate({ _id: request.body._id }, request.body, function(error){
            if(error) {
                response.json(error);
            } else {
                response.json(true);
            }
        })
    },

    getBicycles:function(request, response){
        Bicycle.find({}, function(error, bicycles){
            if(error) {
                console.log(error);
            } else {
                response.json(bicycles);
            }
        }).sort({createdAt:-1});
    },

    getSearch:function(request, response){
        Bicycle.find({$text:{$search:`${request.body.content}`}}, function(error, bicycles){
            if(error) {
                console.log(error);
            } else {
                response.json(bicycles);
            }
        }).sort({createdAt:-1});
    },

    getUser:function(request, response){
        User.findOne({_id:request.session._id}, function(error, user){
            if(error) {
                console.log(error);
            } else {
                response.json(user);
            }
        })
    }
}
