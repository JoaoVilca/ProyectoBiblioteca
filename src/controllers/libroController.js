const { Libro } = require("../config/sequelize");

const crearLibro = async (req, res) => {
  try {
    nuevoLibro = await Libro.create(req.body);
    return res.json({
      ok: true,
      content: nuevoLibro,
      message: "Libro creado con exito",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      content: error,
      message: "Hubo un error al crear el libro",
    });
  }
};
module.exports = {
  crearLibro,
};
