const { Router } = require("express");
const Imagen_controller = require("../controllers/imagenController");
const imagen_router = Router();
const multiparty = require("connect-multiparty");
const multipartyMiddelware = multiparty({
  uploadDir: "./src/images",
  maxFilesSize: 5 * 1024 * 1024,
});

imagen_router.post(
  "/subirImagen",
  multipartyMiddelware,
  Imagen_controller.subirImagen
);
module.exports = imagen_router;
