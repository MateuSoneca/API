const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const filmes= require('./routes/filmes')
app.use('/filmes', filmes)

const categorias= require('./routes/categorias')
app.use('/categorias', categorias)

const categoriaTerror = require('./routes/categoriaTerror')
app.use('/terror', categoriaTerror)

const categoriaRomance =require('./routes/categoriasRomance')
app.use('/romance', categoriaRomance)

app.listen(port, () => {
  console.log(`O app esta rodando aqui: ${port}`)
})


