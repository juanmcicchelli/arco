const express = require("express");

const Equipo = require("../models/Equipo");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

/*
CREAR EQUIPO
ADMIN
*/

router.post(
    "/",
    authMiddleware,
    roleMiddleware("ADMIN"),
    async (req, res) => {

        try {

            const equipo = new Equipo(req.body);

            await equipo.save();

            res.status(201).json(equipo);

        } catch (error) {

            res.status(500).json({
                error: error.message
            });

        }

    }
);

/*
LISTAR EQUIPOS
PUBLICO
*/

router.get("/", async (req, res) => {

    const equipos = await Equipo.find();

    res.json(equipos);

});

module.exports = router;