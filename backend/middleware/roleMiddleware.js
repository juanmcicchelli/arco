const roleMiddleware = (...rolesPermitidos) => {

    return (req, res, next) => {

        console.log("JWT:", req.user);

        if (!rolesPermitidos.includes(req.user.rol)) {

            return res.status(403).json({
                mensaje: "No tiene permisos"
            });

        }

        next();

    };

};

module.exports = roleMiddleware;