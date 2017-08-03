var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');


app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
console.log(__dirname);

app.get('/', function(request, response){
    response.send("<h1>hello</h1>");
})

app.get('/users', function(request, response){
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})
app.post('/users', function (request, response){
    console.log("POST DATA \n\n", request.body)
    response.redirect('/users')
});
app.listen(8000, function(){
    console.log("Listening on port 8000");
})
