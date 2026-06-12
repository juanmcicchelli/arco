const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.get(
    "/dashboard",
    authMiddleware,
    roleMiddleware("ADMIN"),
    (req, res) => {

        res.json({
            mensaje: "Bienvenido Administrador",
            usuario: req.user
        });

    }
);

module.exports = router;