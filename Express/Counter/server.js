var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(session({secret: 'codingdojorocks'}));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
console.log(__dirname);

app.get('/', function(request, response){
    if(request.session.count === undefined || request.session.count === null){
        request.session.count = 1;
    }else{
        request.session.count += 1;
    }
    response.render('index', {count: request.session.count});
})
app.get('/reset', function(request, response){
    if(request.session.count != undefined || request.session.count != null){
        delete request.session.count;
    }
    response.redirect('/');
})

app.listen(8000, function(){
    console.log("Listening on port 8000");
})
