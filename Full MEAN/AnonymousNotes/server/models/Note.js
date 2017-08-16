
var mongoose       = require('mongoose');
var Schema         = mongoose.Schema,
noteSchema = new Schema({
    content: { type: String, required: [true, "Note required"]}
},{timestamps:true});

mongoose.model("Note",noteSchema);
