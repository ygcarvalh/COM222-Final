var express = require('express');
var router = express.Router();
var Jogo = require('./jogoRegistro');

router.post('/', function(req , res){
    console.log(req.boby);
    let j = new Jogo({
        console: req.body.console,
        titulo: req.body.titulo,
        resumo: req.body.resumo,
        dev: req.body.dev,
        genero: req.body.genero,
        pathImagem: req.body.pathImagem
    })
    j.save((err, jog) =>{
        if(err)
            res.status(500).send(err);
        else
            res.status(200).send(jog);

    })
})

router.get('/', function(req , res){
    Jogo.find().exec((err, jog)=>{
        if(err)
        res.status(500).send(err);
    else
        res.status(200).send(jog);
    })
    
})

module.exports = router;