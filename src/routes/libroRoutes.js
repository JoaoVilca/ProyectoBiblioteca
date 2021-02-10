const { Router } = require("express");
const Libro_controller = require("../controllers/libroController");
const libro_router = Router();

libro_router.post("/libro", Libro_controller.crearLibro);

module.exports = libro_router;
