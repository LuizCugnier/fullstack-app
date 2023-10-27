const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");


router.post('/', async (req, res) => {
    const { username, password } = req.body;
    try {
        bcrypt.hash(password, 10).then((hash) => {
            Users.create({
                username: username,
                password: hash
            })
            res.status(201).json({ message: "Usuario criado com sucesso!" })
        })
    } catch (error) {
        console.error("Erro ao criar usuario:", error);
        res.status(500).json({ error: "Erro interno do servidor" })
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username: username } });

    if (!user) res.json({ error: "Usuário não encontrado!" });

    bcrypt.compare(password, user.password).then( async (match) => {
        if (!match) res.json({ error: "Usuario ou senha incorretos!" });

        const accessToken = sign(
            { username: user.username, id: user.id },
            "importantsecret"
        );

        res.json({ token: accessToken});
    });

})

module.exports = router;
