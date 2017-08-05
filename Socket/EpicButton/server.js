var express = require("express");
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
console.log(__dirname);

let count = 0;
app.get('/', function(request, response){
    response.render('index');
})

var server = app.listen(8000, function(){
    console.log("Listening on port 8000");
})
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    socket.on( "clicking_count", function (data){
        io.emit( 'updated_message', {response:count++});
    })
    socket.on( "reseting_count", function (data){
        io.emit( 'updated_message', {response:count=0});
    })
})
