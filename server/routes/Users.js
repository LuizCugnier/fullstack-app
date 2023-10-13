const express = require("express");
const router = express.Router();
const { Users } = require("../models");

router.get('/', async (req, res) => {
    const listOfUsers = await Users.findAll()
    res.json(listOfUsers);
});

router.post('/', async (req, res) => {
    try {
        const user = req.body
        await Users.create(user)
        res.json(user)
    } catch (error) {
        console.error("Erro ao criar usuario:", error);
        res.status(500).json({ error: "Erro interno do servidor" })
    }
});

module.exports = router;
