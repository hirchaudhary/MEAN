var mongoose = require('mongoose');
var Animal = mongoose.model('Animal', new mongoose.Schema({name: String, legs: Number, color: String}, {timestamps:true}))
