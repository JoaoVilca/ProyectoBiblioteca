const express = require("express");
const bodyParser = require("body-parser");
const { conexion } = require("./sequelize");
const libro_router = require("../routes/libroRoutes");
const categoria_router = require("../routes/categoriaRouter");
const imagen_router = require("../routes/imagenRouter");
const usuario_router = require("../routes/usuarioRouter");

module.exports = class Server {
  constructor() {
    this.app = express();
    this.puerto = process.env.PORT || 5000;
    this.CORS();
    this.configurarBodyParser();
    this.rutas();
  }
  CORS() {
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Header", "Content-Type, Authorization");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      next();
    });
  }
  configurarBodyParser() {
    this.app.use(bodyParser.json());
  }
  rutas() {
    this.app.get("/", (req, res) => {
      res.json({
        ok: true,
        message: "Bienvenido a mi API de Alquiler de libros",
      });
    });
    this.app.use("", libro_router);
    this.app.use("", categoria_router);
    this.app.use("", imagen_router);
    this.app.use("", usuario_router);
  }
  start() {
    this.app.listen(this.puerto, () => {
      console.log("Servidor corriendo exitosamente.");
      conexion.sync({force:true}).then(() => {
        console.log("Base de datos sincronizada correctamente.");
      });
    });
  }
};
