const { Double } = require('mongodb');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jogoRegistroSchema = new Schema({
    console: String,
    titulo: String,
    resumo: String,
    dev: String,
    genero: String,
    media: String,
    pathImagem: String
}, {versionKey: false});

module.exports = mongoose.model("JogoRegistro", jogoRegistroSchema);