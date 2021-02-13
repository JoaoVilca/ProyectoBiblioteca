const { Imagen } = require("../config/sequelize");
const fs = require("fs");
const path = require("path");

const subirImagen = async (req, res) => {
  let { imagen } = req.files;
  let tipoImagen = imagen.type.split("/")[0];
  if (imagen && tipoImagen == "image") {
    let ruta = imagen.path;
    let nombreArchivo = ruta.split("\\")[2];
    let imagenCreada = await Imagen.create({
      imagenURL: nombreArchivo,
    });
    return res.json({
      ok: true,
      content: imagenCreada,
      message: "Imagen creada",
    });
  } else {
    let llave = Object.keys(req.files)[0];
    if (llave) {
      let ruta = req.files[files].path;
      fs.unlink(ruta, (errorEliminacion) => {
        console.log(errorEliminacion);
      });
    }
    return res.status(404).json({
      ok: false,
      content: null,
      message: "Falta la imagen",
    });
  }
};
module.exports = {
  subirImagen,
};
