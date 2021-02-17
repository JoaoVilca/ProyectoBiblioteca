const { Router } = require("express");
const Libro_controller = require("../controllers/libroController");
const libro_router = Router();

libro_router.post("/libro", Libro_controller.crearLibro);
libro_router.put("/libro/:id", Libro_controller.actualizarLibro);
libro_router.delete("/libro/:id", Libro_controller.eliminarLibro);
libro_router.get("/libros", Libro_controller.listarLibros);
libro_router.get("/libro/:id", Libro_controller.listarLibrosPorId);

module.exports = libro_router;
