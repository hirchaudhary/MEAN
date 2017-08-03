var express = require("express");
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
console.log(__dirname);

app.get('/', function(request, response){
    response.render('index');
})
app.post('/result', function(request, response){
    response.render('result', {dojo: request.body});
})

app.listen(8000, function(){
    console.log("Listening on port 8000");
})
