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
    const contato=contatos.find(item => item.id)
    res.json(contatos);
});

module.exports = router;