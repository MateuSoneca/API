const express = require("express")
const router= express.Router()

const filmesTerror=[
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

router.get('/', (req,res)=>{
    res.json(filmesTerror)
})
router.get('/:id', (req,res)=>{
    const terrorId= filmesTerror.find(itemm=>
        itemm.id===Number(req.params.id));
        if(!terrorId){
            return res.status(404).json({msg:"nao encontrei o"})
        }
    res.json(terrorId)
})
module.exports= router