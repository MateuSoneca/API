const express = require("express")
const router= express.Router()

let filmesTerror=[
    {
    id:1,
    nome:"A orfa 2",
    ano: 2022,
    },
    {
    id:2,
    nome: "A bruxa",
    ano: 2019
    }
]

router.get('/',(req,res)=>{
    res.json(filmesTerror)
})

router.get('/:id',function(req,res,next){
    const categoriaLoc = filmesTerror.find(item =>
        item.id === Number(req.params.id));
        if(!categoriaLoc){
            return res.status(404).json({msg:"nao achei a categoria"})
        }
        res.json(categoriaLoc)
})



router.post('/', (req, res,next)=>{
    const id= filmesTerror.length +1;
    const {nome}= req.body
    const novCategoria = {
        id,
        nome
    }
    for(i=0;i<filmesTerror.length;i++){
        if(nome==filmesTerror[0].nome){
            console.log("ja tem")
            i=filmesTerror.length
            return res.status(400).json({msg:"nao foi possivel adicionar!"})
        }else{
            console.log("da pra adicionar")
            filmesTerror.push(novCategoria)
            i=filmesTerror.length
        }
    }
    res.send(filmesTerror)
})

router.put('/:id', function(req,res,next){
    const id = req.params.id;
    const nome = req.body.nome;
    let novo = filmesTerror.filter(value=>value.id==id);
    novo[0].nome=nome;
    res.json(novo[0]);
})

router.delete('/:id', function(req,res){
    const id = req.params.id
    filmesTerror = filmesTerror.filter(value=> value.id!=id);
    res.json(filmesTerror)
})
module.exports= router