const express = require('express')  //Inicia o express 
const app = express()               //Passo a função express para a variável app (facilita a manipulação depois pois fica com uma sintaxe menor)
const cors = require('cors')

app.use(express.json())
app.use(cors())

require('dotenv').config()          //Chama o Dotenv, onde estão guardadas as variáveis de ambiente (importantes) 
const PORT = process.env.PORT       //Guarda na variável POST o número da porta 

const db = require('../models/')    //Chama os modelos do DataBase

//Routes
const postRouter = require("../routes/Posts")                   //Guarda a rota 'post' vinda da pasta routes
app.use('/posts', postRouter)                                   //Fala para o express usar o endpoint '/posts' como rota 'postRouter'  

db.sequelize.sync().then(() => {                                //usa o sequelize para sincronizar as tabelas do BD e apos executa a função
    app.listen(PORT, () => {                                    //Chama a função do express 'listen' que fica escutando a porta definida esperando uma ação/mudança
        console.log(`Servidor está rodando na porta ${PORT}`)   //Printa no console que o servidor está rodando na porta definida
    })
})


