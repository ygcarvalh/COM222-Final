const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors);

mongoose.connect(
    'mongodb+srv://admin:<admin>@cluster0.xlwnp.mongodb.net/<com222>?retryWrites=true&w=majority',
    {useNewUrlParser: true});

app.use('/', controller);

app.listen(3000);
