const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Intentando conectar a MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado");
  } catch (error) {
    console.error("ERROR COMPLETO:");
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;