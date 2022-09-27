const express = require("express");
const router = express.Router();

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
            console.log("da pra adicionar")
            categorias.push(novCategoria)
            i=categorias.length
        }
    }
    res.send(categorias)
})

router.put('/:id', function(req,res,next){
    const categoriaMudar=categorias.find(categorias=>
        categorias.id === Number(req.params.id));
        if(!categoriaMudar){
            return res.status(404).json({msg:'nao existe essa categoria'})
        }
        categoriaMudar.nome = req.body.nome;
        res.json(categoriaMudar).status(204).end();
})


router.delete('/:id', function(req,res){
    const id = req.params.id
    remover = categorias.filter(value=> value.id==id);
    res.json(remover[0])
})

module.exports = router