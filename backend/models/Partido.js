const mongoose = require("mongoose");

const PartidoSchema = new mongoose.Schema({

    local: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Equipo",
        required: true
    },

    visitante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Equipo",
        required: true
    },

    golesLocal: {
        type: Number,
        default: 0
    },

    golesVisitante: {
        type: Number,
        default: 0
    },

    fecha: {
        type: Date,
        required: true
    },

    estado: {
        type: String,
        enum: ["PROGRAMADO", "FINALIZADO"],
        default: "PROGRAMADO"
    }

});

module.exports = mongoose.model(
    "Partido",
    PartidoSchema
);