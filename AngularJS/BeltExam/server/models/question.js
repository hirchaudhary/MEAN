var mongoose       = require('mongoose');
var Schema         = mongoose.Schema,
questionSchema = new Schema({
    question: { type: String, required: [true, "Name required"]},
    description: { type: String},
    _answer: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
},{timestamps:true});


mongoose.model("Question",questionSchema);