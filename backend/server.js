require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const equiposRoutes = require("./routes/equiposRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/equipos", equiposRoutes);

app.get("/", (req, res) => {
  res.send("API OK");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});