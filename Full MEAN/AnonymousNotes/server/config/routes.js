
let noteController = require("../controllers/noteController.js");

module.exports = function(app){
    app.get("/notes", noteController.index);
    app.post("/create", noteController.create);
}