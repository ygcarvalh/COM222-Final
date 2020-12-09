var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewRegistroSchema = new Schema({
    review: String,
    nota: Number,
    jogo: String,
}, {versionKey: false});

module.exports = mongoose.model("ReviewRegistro", reviewRegistroSchema);