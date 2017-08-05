var express = require("express");
var app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));

app.get('/', function(request, response){
    response.render('index');
})

var server = app.listen(8000, function(){
    console.log("Listening on port 8000");
})
let users = {};
let allTexts = [];
let newUser = [];

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    socket.emit("connect_id", { id:socket.id, allUsers:users });

    socket.on( "page_load", function (data){
        users[data.id] = data.name;
        newUser.push(data.name);
        socket.broadcast.emit( 'new_user', {name:newUser[newUser.length-1]});
        socket.emit('all_texts', allTexts);
    })

    socket.on( "send_message", function (data){
        allTexts.push(`${users[socket.id]} : ${data.message}`)
        io.emit( 'new_message', {message: allTexts[allTexts.length-1]});
    })
})
