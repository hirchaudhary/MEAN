
var mongoose       = require('mongoose');
var Schema         = mongoose.Schema,
answerSchema = new Schema({
    answer: { type: String, required: [true, "Answer required"]},
    description: { type: String},
    likes: { type: Number},
    user: {type: String},
    _question: {type: Schema.Types.ObjectId, ref: 'Question'}
},{timestamps:true});

mongoose.model("Answer",answerSchema);