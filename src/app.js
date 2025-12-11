// src/app.js
const express = require("express");
const { port } = require("./config/env");
const routes = require("./routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// prueba
app.get("/", (req, res) => res.send("Hola mi server en Express"));

// rutas
app.use("/api", routes);

// manejador de errores (al final)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
