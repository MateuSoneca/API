const express = require('express')
const app = express()
const port = 3000

const swaggerDocs = require('./swagger.json')
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


const swaggerOptions = {
  swaggerDefinition:{
    info:{
      title:'Meus filmes',
      description: "varios filmes",
      contacct : {
        name: "mateus"
      },
      servers: ['http://localhost:5000']
    }
  },
  apis: [".routes.*.js"]
};

const swaggerDocument = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());


app.get('/', (res,req)=>{
  res.json({msg:"bem vindo ao app"})
})

/*const filmes= require('./routes/filmes')
app.use('/filmes', filmes)*/

const categorias= require('./routes/categorias')
app.use('/categorias', categorias)

const categoriaTerror = require('./routes/categoriaTerror')
app.use('/terror', categoriaTerror)

const categoriaRomance =require('./routes/categoriasRomance')
app.use('/romance', categoriaRomance)

const categoriaComedia = require('./routes/categoriaComedia')
app.use('/comedia', categoriaComedia)



app.listen(port, () => {
  console.log(`O app esta rodando aqui: ${port}`)
})


