var express = require('express');
var router = express.Router();
var Usuario = require('./usuarioRegistro');

router.post('/', function(req , res){
    console.log(req.boby);
    let u = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    })
    u.save((err, usu) =>{
        if(err)
            res.status(500).send(err);
        else
            res.status(200).send(usu);

    })
})

router.get('/', function(req , res){
    Usuario.find().exec((err, usus)=>{
        if(err)
        res.status(500).send(err);
    else
        res.status(200).send(usus);
    })
    
})

module.exports = router;
