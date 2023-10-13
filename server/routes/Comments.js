const express = require("express"); //Inicia o express
const router = express.Router(); //Chama a função 'Router'do express e guarda em 'router'
const { Comments } = require("../models");

router.get('/:postId', async (req, res) => {
    const postId = req.params.postId;
    const comments = await Comments.findAll({where: {PostId: postId}})
    res.json(comments)
})

router.post('/', async (req, res) => {
    try {
        const comment = req.body;
        await Comments.create(comment)
        res.json(comment)
    } catch (error){
        console.error("Erro ao criar comentario:", error);
        res.status(500).json({ error: "Erro interno do servidor" })
    }
})

module.exports = router