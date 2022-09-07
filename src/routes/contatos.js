const express = require('express')

const router = express.Router()


const contatos = [{
    id: 1,
    nome:'Josnei',
    fone:'8888-888'
},{
    id: 2,
    nome: 'Mateus',
    fone: '666-666'
},{
    id:3,
    nome:'Milena',
    fone:'555-555',
}
];

router.get('/', function(req, res, next){
    res.json(contatos);
});

router.get('/:id', function(req, res, next){
    const contatolocalizado=contatos.find(item => 
        item.id === Number(req.params.id));
    res.json(contatolocalizado);
});
module.exports = router;