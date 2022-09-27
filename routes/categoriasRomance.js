const express= require('express')
const router = express.Router()
const func = require('../controllers/filmecontroller')

const romance = [
    {
    id:1,
    nome:'a primeira vez'
},
    {
    id:2,
    nome:'como nao perder essa mulher'
    }
]
router.get('/', func.pegarTodos)

router.get('/:id', function(req,res){
    const romanceId = romance.find(item =>
        item.id === Number(req.params.id));
    if(!romanceId){
        return res.status(404).json({msg:"nao achei a categoria"})
    }
    res.send(romanceId)
})

router.post('/', function(req,res){
    const id= romance.length +1;
    const {nome}= req.body
    const novoFilme=[
        id,
        nome
    ]
    for(i=0; i<romance.length;i++){
        if(nome==romance[i].nome){
            console.log("ja tem esse filme")
            i= romance.length
        }else{
            console.log("filme adicionado")
            romance.push(novoFilme)
            i= romance.length
        }
    }
    res.send(romance)


})

module.exports= router