var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewRegistroSchema = new Schema({
    review: String,
    nota: Number,
}, {versionKey: false});

module.exports = mongoose.model("ReviewRegistro", reviewRegistroSchema);