const { Router } = require("express");
const Usuario_controller = require("../controllers/usuarioController");
const usuario_router = Router();

usuario_router.post("/usuario", Usuario_controller.crearUsuario);
usuario_router.post('/login', Usuario_controller.login)

module.exports = usuario_router;
