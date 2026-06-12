const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {

    try {

        const { nombre, email, password } = req.body;

        const existe = await User.findOne({ email });

        if (existe) {
            return res.status(400).json({
                mensaje: "El usuario ya existe"
            });
        }

        const hash = await bcrypt.hash(password, 10);

        const usuario = new User({
            nombre,
            email,
            password: hash
        });

        await usuario.save();

        res.status(201).json({
            mensaje: "Usuario creado"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const usuario = await User.findOne({ email });

        if (!usuario) {
            return res.status(401).json({
                mensaje: "Credenciales inválidas"
            });
        }

        const valido = await bcrypt.compare(
            password,
            usuario.password
        );

        if (!valido) {
            return res.status(401).json({
                mensaje: "Credenciales inválidas"
            });
        }

        const token = jwt.sign(
            {
                id: usuario._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.json({
            token
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

module.exports = router;