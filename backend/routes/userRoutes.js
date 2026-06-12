const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const User = require("../models/User");

const router = express.Router();

router.get(
    "/me",
    authMiddleware,
    async (req, res) => {

        try {

            const usuario = await User.findById(
                req.user.id
            ).select("-password");

            res.json(usuario);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });

        }

    }
);

router.get(
    "/dashboard",
    authMiddleware,
    (req, res) => {

        res.json({
            mensaje: "Bienvenido al Dashboard",
            usuario: req.user
        });

    }
);

module.exports = router;