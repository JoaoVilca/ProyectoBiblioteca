const { Router } = require("express");
const Categoria_controller = require("../controllers/categoriaController");
const categoria_router = Router();

categoria_router.post("/categoria", Categoria_controller.crearCategoria);
categoria_router.get('/listarCategorias', Categoria_controller.listarCategorias)
categoria_router.put('/actualizarCategoria/:id',Categoria_controller.actualizarCategoria)

module.exports = categoria_router;
