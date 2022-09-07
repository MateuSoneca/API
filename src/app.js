const express = require('express');

const app = express();

const indexRouter = require('./routes/index');

const contatosRouter = require('./routes/contatos');

module.exports=app;

app.use(express.json()); // vem algo no body da req em JSON req.body

app.use('/', indexRouter);
app.use('/contatos',contatosRouter);