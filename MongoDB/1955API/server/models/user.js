var mongoose = require('mongoose');
var User = mongoose.model('User', new mongoose.Schema({name: String}, {timestamps:true}))
