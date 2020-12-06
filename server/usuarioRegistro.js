var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioRegistroSchema = new Schema({
    nome: String,
    email: String,
    senha: String
}, {versionKey: false});

module.exports = mongoose.model("UsuarioRegistro", usuarioRegistroSchema);