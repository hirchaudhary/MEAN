var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
    createUser: function(request, response) {
        User.create(request.body, function(error) {
            if(!error) {
                request.session.name = request.body.name;
                response.json(true);
            }else{
                response.json(error);
            }
        })
    },

    getUser:function(request, response){
        User.findOne({_id:request.session._id}, function(error, user){
            if(error) {
                console.log(error);
            } else {
                response.json(user);
            }
        })
    },


    logout: function(request, response){
        if(request.session.name != null){
            request.session.name = null;
            response.json("logged out")
        }else{
            response.json("not logged in")
        }
    },

    newQuestion: function(request, response) {
        Question.create(request.body, function(error) {
            if(!error) {
                response.json(true);
            }else{
                response.json(error);
            }
        })
    },

    getQuestions:function(request, response){
        Question.find({}, function(error, questions){
            if(error) {
                console.log(error);
            } else {
                response.json(questions);
            }
        })
    },

    getQuestion:function(request, response){
        Question.findOne({_id:request.params.id}, function(error, question){
            if(error) {
                console.log(error);
            } else {
                response.json(question);
            }
        })
    },

    newAnswer: function(request, response){
        var answer = new Answer(request.body.answer);
        answer.user = request.session.name;
        answer.likes = 0;
        answer._question = request.body.id;
        answer.save(function(error){
            Question.findOneAndUpdate({ _id: request.body.id }, { $push: { _answer: answer }},function(error){}) 
            if(error) {
                response.json(error);
            }else{
                response.json(answer); 
            } 
        })  
    },

    getQuestionWithAnswers:function(request, response){
        Question.findOne({_id:request.params.id}).populate('_answer').exec(function(error, question){
            Answer.find({_question:request.params.id}, function(err, answers){
                if(error) {
                    console.log(error);
                } else {
                    response.json({question:question, answers:answers});
                }
            }).sort({likes:-1})
        })
    },

    increaseLikes: function(request, response){
        Answer.findOneAndUpdate({ _id: request.body.id }, { $inc: { likes: 1 } },function(error){
            if(error) {
                response.json(error);
            }else{
                response.json(true); 
            }  
        }) 
    },

    getSearch:function(request, response){
        // need below line to run in mongodb to search data. Query doesnt work in controller
        // Question.createIndex({question:"text"})
        Question.find({$text:{$search:`${request.body.content}`}}, function(error, questions){
            if(error) {
                console.log(error);
            } else {
                console.log(questions);
                response.json(questions);
            }
        }).sort({createdAt:-1});
    }
}
