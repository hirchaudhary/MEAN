var mongoose = require('mongoose');
var User = mongoose.model('User')

module.exports = {
    register: function(request, response) {
        let errors = [];
        if(request.body.password != request.body.passwordconfirm){
            errors.push({message: "Password and confirm password must match"})
        }
        User.find({email: request.body.email}, function(error, user){
            if(user.length > 0){
                errors.push({message: "Email already exists"})
            }
        })
        var user = new User(request.body)
        user.save(function(error) {
            if(!error && errors.length < 1) {
                console.log('successfull!');
                request.session.id = user.id;
                request.session.fullname = user.firstname+" "+user.lastname;
                response.redirect('/login');
            }else{
                console.log(error);
                response.render('index', {errors: error, madeErrors:errors})
            }
        })
    },

    login: function(request, response){
        let errors = [];

        if(request.body.email.length < 1){
            errors.push({message: "Please enter email"});
        }
        if(request.body.password.length < 1){
            errors.push({message: "Please enter password"});
        }
        if(errors.length > 0){
            response.render("login",{madeErrors:errors, response:request.body});
        }else{
            User.findOne({email: request.body.email}, function(error, user) {
                if(user.length < 1 || error){
                    errors.push({message: "Email is not registered"})
                    response.render('login', {madeErrors:errors})
                }else{
                    if(!User.schema.methods.match(request.body.password,user.password)){
                        errors.push({message: "Password not matched"})
                        response.render('login', {madeErrors:errors});
                    }else{
                        request.session.id   = user.id;
                        request.session.fullname = `${user.firstname} ${user.lastname}`;
                        response.redirect("/home");
                    }
                }
            })
        }
    }
}
