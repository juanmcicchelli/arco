const mongoose = require("mongoose");

const EquipoSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true,
        unique: true
    },

    ciudad: {
        type: String
    },

    estadio: {
        type: String
    },

    logo: {
        type: String
    },

    fechaCreacion: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model(
    "Equipo",
    EquipoSchema
);