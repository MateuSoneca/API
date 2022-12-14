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
        if (!contatolocalizado) {
            return res.status(404).json({msg:"nao achei o contato!"})
        }
    res.json(contatolocalizado);
});

router.post('/:id', function(req, res, next) {
    const novoContato = {
        id: contatos.length +1,
        nome : req.body.nome,
        fone : req.body.fone,
    };
    contatos.push(novoContato);
    res.status(201).json(novoContato);
});

router.put('/:id', function(req, res, next){
    const contatolocalizado=contatos.find(contato => 
        contato.id === Number(req.params.id));
        if (!contatolocalizado) {
            return res.status(404).json({msg:"nao achei o contato!"})
        }
        contatolocalizado.nome = req.body.nome;
        contatolocalizado.fone = req.body.fone;
        res.status(204).end();
});

module.exports = router;