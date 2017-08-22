let path = require('path');
let beltController = require("../controllers/beltController.js");

module.exports = function(app){
    app.post("/createUser", beltController.createUser);
    app.post("/addQuestion", beltController.newQuestion);
    app.post("/addAnswer", beltController.newAnswer);
    app.put("/increaseLikes", beltController.increaseLikes);
    app.get("/getUser", beltController.getUser);
    app.get("/getQuestions", beltController.getQuestions);
    app.get("/answer/:id", beltController.getQuestion);
    app.get("/question/:id", beltController.getQuestionWithAnswers);
    app.get("/logout", beltController.logout);
    app.get("/getSearch", beltController.getSearch);
    app.get('*', function(request, response) {
        response.sendFile(path.resolve("./static/dist/index.html"))
    })
}