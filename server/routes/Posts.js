const express = require('express')              //Inicia o express
const router = express.Router();                //Chama a função 'Router'do express e guarda em 'router' 
const {Posts} = require('../models')            //Chama a tabela Posts  

router.get('/', async (req, res) => {                 //Cria uma rota get no endpoint '/posts/' - essa chamada tem um requerimento 'request' e uma resposta 'res'
    const listOfPosts = await Posts.findAll()        //Ler da tabela Posts todos os posts
    res.json(listOfPosts)
})

router.get('/ById/:id', async (req, res) => {       //Cria uma rota get no endpoint "/ById/:id" com uma chave id "/:id" 
    try {
        const id = req.params.id
        const post = await Posts.findByPk(id)
        if (post) {
            res.json(post)    
        } else {
            res.status(404).json("Id do post nao encontrado")
        }
        
    } catch (error){
        res.status(500).json({error: "Id do post nao encontrado"})
    }
})

router.post('/', async (req, res) => {          //Cria uma rota post no endpoint '/posts/' - essa chamada tem um requerimento 'request' e uma resposta 'res'
    try {
        const post = req.body                       //Guarda o corpo do requerimento
        await Posts.create(post)                    //Aguarda para que o post seja criado no BD
        res.json(post)
    } catch (error) {
        console.error("Erro ao criar post:", error);
        res.status(500).json({ error: "Erro interno do servidor" })  
    }                            
})

module.exports = router                         //Exporta o router para ser chamado