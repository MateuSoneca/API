const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const { application } = require("express");

application.use(bodyParser.json());


let categorias = [
    {
    id: 1, 
    nome:'comedia'},
    {
    id: 2,
    nome:'terror'},
    {
    id: 3,
    nome: 'romance'}
]

router.get('/', (req,res)=>{
    res.send(categorias)
})

router.get('/:id',function(req,res,next){
    const categoriaLoc = categorias.find(item =>
        item.id === Number(req.params.id));
        if(!categoriaLoc){
            return res.status(404).json({msg:"nao achei a categoria"})
        }
        res.json(categoriaLoc)
})



router.post('/', (req, res,next)=>{
    const id= categorias.length +1;
    const {nome}= req.body
    const novCategoria = {
        id,
        nome
    }
    for(i=0;i<categorias.length;i++){
        if(nome==categorias[0].nome){
            console.log("ja tem")
            i=categorias.length
            return res.status(400).json({msg:"nao foi possivel adicionar!"})
        }else{
            categorias.push(novCategoria)
            i=categorias.length
        }
    }
    res.send(categorias)
})

router.put('/:id', function(req,res,next){
    const id = req.params.id;
    const nome = req.body.nome;
    let novo = categorias.filter(value=>value.id==id);
    novo[0].nome=nome;
    res.json(novo[0]);
})

router.delete('/:id', function(req,res){
    const id = req.params.id
    categorias = categorias.filter(value=> value.id!=id);
    res.json(categorias)
})

module.exports = router