const express= require('express')
const router = express.Router()
const func = require('../controllers/filmecontroller')

let romance = [
    {
    id:1,
    nome:'a primeira vez'
},
    {
    id:2,
    nome:'como nao perder essa mulher'
    }
]

router.get('/',(req,res)=>{
    res.json(romance)
    es.status(200)
})

router.get('/:id',function(req,res,next){
    const categoriaLoc = romance.find(item =>
        item.id === Number(req.params.id));
        if(!categoriaLoc){
            return res.status(404).json({msg:"nao achei a categoria"})
        }
        res.json(categoriaLoc)
        es.status(200)
})



router.post('/', (req, res,next)=>{
    const id= romance.length +1;
    const {nome}= req.body
    const novCategoria = {
        id,
        nome
    }
    for(i=0;i<romance.length;i++){
        if(nome==romance[0].nome){
            console.log("ja tem")
            i=romance.length
            return res.status(400).json({msg:"nao foi possivel adicionar!"})
        }else{
            console.log("da pra adicionar")
            romance.push(novCategoria)
            i=romance.length
            res.status(201)
        }
    }
    res.send(romance)
})

router.put('/:id', function(req,res,next){
    const id = req.params.id;
    const nome = req.body.nome;
    let novo = romance.filter(value=>value.id==id);
    novo[0].nome=nome;
    res.json(novo[0]);
    res.status(201)
})

router.delete('/:id', function(req,res){
    const id = req.params.id
    romance = romance.filter(value=> value.id!=id);
    res.json(romance)
    res.status(202)
})

module.exports= router