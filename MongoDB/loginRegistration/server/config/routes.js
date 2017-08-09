let mongoose = require("mongoose");
let userController = require("../controllers/userController.js");

module.exports = function(app){
    app.get("/",function(request,response){
        response.render("index");
    });

    app.post("/register",function(request,response){
        userController.register(request,response);
    });

    app.post("/login",function(request,response){
        userController.login(request,response);
    });
    app.get("/login",function(request,response){
        response.render('login')
    });
    app.get("/home",function(request,response){
        if(!request.session.id){
            response.redirect("/");
        }else{
            response.render("home",{fullname:request.session.fullname});
        }
    });
}
