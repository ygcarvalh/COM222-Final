var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioRegistroSchema = new Schema({
    name: String,
    email: String,
    password: String
}, {versionKey: false});

module.exports = mongoose.model("UsuarioRegistro", usuarioRegistroSchema);