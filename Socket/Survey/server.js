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

var server = app.listen(8000, function(){
    console.log("Listening on port 8000");
})
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    socket.on( "posting_form", function (data){
        socket.emit( 'updated_message', {response:data});
        socket.emit( 'random_number', {lucky:Math.floor(Math.random() * 1000)});
    })
})
