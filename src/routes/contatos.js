const express = require('express')

const router = express.Router()


router.get('/', function(req,res,next){
    res.send('API de produtos');
});

module.exports = router;

const contatos = [{
    id: 1,
    nome:'Josnei',
    fone:'8888-888'
},{
    id: 2,
    nome: 'Mateus',
    fone: '666-666'
}
];

router.get('/', function(req, res, next){
    res.json(contatos);
});