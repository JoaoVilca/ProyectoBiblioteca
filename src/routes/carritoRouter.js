const { Router } = require("express");
const Carrito_controller = require("../controllers/carritoController");
const carrito_router = Router();
const {wachiman} = require('../utils/validador')

carrito_router.post("/carrito", wachiman,Carrito_controller.crearCarrito);

module.exports = carrito_router;
