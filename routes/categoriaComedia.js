const express = require("express")
const router = express.Router()

let comedia = [
    {
    id:1,
    nome:"eu ri demais"},
    {
    id:2,    
    nome: "caraca que engracado"}
]

router.get('/',(req,res)=>{
    res.json(comedia)
})

router.get('/:id',function(req,res,next){
    const categoriaLoc = comedia.find(item =>
        item.id === Number(req.params.id));
        if(!categoriaLoc){
            return res.status(404).json({msg:"nao achei a categoria"})
        }
        res.json(categoriaLoc)
})
router.post('/', (req, res,next)=>{
    const id= comedia.length +1;
    const {nome}= req.body
    const novCategoria = {
        id,
        nome
    }
    for(i=0;i<comedia.length;i++){
        if(nome==comedia[0].nome){
            console.log("ja tem")
            i=comedia.length
            return res.status(400).json({msg:"nao foi possivel adicionar!"})
        }else{
            console.log("da pra adicionar")
            comedia.push(novCategoria)
            i=comedia.length
        }
    }
    res.send(comedia)
})

router.put('/:id', function(req,res,next){
    const id = req.params.id;
    const nome = req.body.nome;
    let novo = comedia.filter(value=>value.id==id);
    novo[0].nome=nome;
    res.json(novo[0]);
})

router.delete('/:id', function(req,res){
    const id = req.params.id
    comedia = comedia.filter(value=> value.id!=id);
    res.json(comedia)
})



module.exports = router