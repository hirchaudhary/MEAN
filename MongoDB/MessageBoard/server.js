var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');
mongoose.Promise = global.Promise;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//message schema
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
	name: String,
	message: String,
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});
MessageSchema.path('name').required(true, 'Name cannot be blank');
MessageSchema.path('message').required(true, 'Message cannot be blank');
mongoose.model("Message", MessageSchema);
var Message = mongoose.model("Message");

//comment schema
var CommentSchema = new mongoose.Schema({
	name: String,
	comment: String,
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
});
CommentSchema.path('name').required(true, 'Name cannot be blank');
CommentSchema.path('comment').required(true, 'Comment cannot be blank');
mongoose.model("Comment", CommentSchema);
var Comment = mongoose.model("Comment");

//controllers
app.get('/', function(request, response){
    Message.find({})
    .populate("_comments")
    .exec(function(errors,messages){
        response.render('index',{messages:messages});
    })
})

app.post('/addMessage', function(request, response){
    Message.create(request.body, function(error) {
        if(error) {
            Message.find({})
            .populate("_comments")
            .exec(function(errors,messages){
                this.messages = messages;
            })
            response.render('index', {errors: error, messages:this.messages});
        } else {
            response.redirect('/');
        }
    })
})

app.post('/addComment/:id', function(request, response){
    Message.findOne({_id: request.params.id}, function(error, message){
        var comment = new Comment(request.body);
        comment._message = message._id;
        Message.update({_id: message._id}, {$push: {'_comments': comment}}, function(error){})
        comment.save(function(error){
            if(error) {
                Message.find({})
                .populate("_comments")
                .exec(function(errors,messages){
                    this.messages = messages;
                })
                response.render('index', {errors: error, messages:this.messages});
            } else {
                response.redirect('/');
            }
        })
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
