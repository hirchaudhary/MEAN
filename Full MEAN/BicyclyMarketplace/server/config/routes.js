let path = require('path');
let bicycleController = require("../controllers/bicycleController.js");

module.exports = function(app){
    app.post("/createUser", bicycleController.createUser);
    app.post("/login", bicycleController.login);
    app.post("/addBicycle", bicycleController.addBicycle);
    app.get("/getMyBicycles", bicycleController.getUserBicycles);
    app.get("/getUser", bicycleController.getUser);
    app.get("/logout", bicycleController.logout);
    app.put("/delete", bicycleController.delete);
    app.get("/editPage/:id", bicycleController.getBicycle);
    app.put("/editBicycle", bicycleController.editBicycle);
    app.get("/getBicycles", bicycleController.getBicycles);
    app.post("/getSearch", bicycleController.getSearch);
    app.get('*', function(request, response) {
        response.sendFile(path.resolve("./static/dist/index.html"))
    })
}