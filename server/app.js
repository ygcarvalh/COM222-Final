const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const usuarioRegistro_controller = require('./usuarioRegistro_controller');
const jogoRegistro_controller = require('./jogoRegistro_controller');
const reviewRegistro_controller = require('./reviewRegistro_controller');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(
    'mongodb+srv://db_user:WQM6TIaIyxiMK7kH@cluster0.xlwnp.mongodb.net/com222?retryWrites=true&w=majority',
    {useNewUrlParser: true});

app.use('/usuarios', usuarioRegistro_controller);
app.use('/jogos', jogoRegistro_controller);
app.use('/reviews', reviewRegistro_controller);

app.listen(3000);
