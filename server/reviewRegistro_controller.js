var express = require('express');
var router = express.Router();
var Review = require('./reviewRegistro');

router.post('/', function(req , res){
    console.log(req.boby);
    let u = new Review({
        review: req.body.review,
        nota: req.body.nota,
        jogo: req.body.jogo
    })
    u.save((err, rev) =>{
        if(err)
            res.status(500).send(err);
        else
            res.status(200).send(rev);

    })
})

router.get('/', function(req , res){
    Review.find().exec((err, rev)=>{
        if(err)
        res.status(500).send(err);
    else
        res.status(200).send(rev);
    })
    
})

module.exports = router;
