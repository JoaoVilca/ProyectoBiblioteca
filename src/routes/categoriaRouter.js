const { Router } = require("express");
const Categoria_controller = require("../controllers/categoriaController");
const categoria_router = Router();
const {wachiman} = require('../utils/validador')

categoria_router.post("/categoria", wachiman,Categoria_controller.crearCategoria);
categoria_router.get('/listarCategorias', Categoria_controller.listarCategorias)
categoria_router.put('/actualizarCategoria/:id',Categoria_controller.actualizarCategoria)
categoria_router.delete('/categoria/:id', Categoria_controller.eliminarCategoria)

module.exports = categoria_router;
