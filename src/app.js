const express = require("express");
const { port } = require("./config/env");
const routes = require("./routes");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Prueba básica
app.get("/", (req, res) => {
  res.send("Hola mi server en Express");
});

// API versionada
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});