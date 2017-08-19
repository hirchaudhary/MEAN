var mongoose       = require('mongoose');
var Schema         = mongoose.Schema,
bicycleSchema = new Schema({
    title: { type: String, required: [true, "Title required"]},
    description: { type: String, required: [true, "Description required"]},
    price: { type: Number, required: [true, "Price required"]},
    location: { type: String, required: [true, "Location required"]},
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
},{timestamps:true});

mongoose.model("Bicycle",bicycleSchema);
