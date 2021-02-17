const { Alquiler } = require("../config/sequelize");

const registrarAlquiler = async (req, res) => {
  try {
    const alquiler = await Alquiler.create(req.body);
    return res.status(201).json({
      ok: true,
      conent: alquiler,
      message: "Se registro el alquiler con exito",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      content: error,
      message: "Hubo un error al registrar el alquiler",
    });
  }
};
const actualizarAlquiler = (req, res) => {
  let { id } = req.params;
  Alquiler.update(req.body, {
    where: {
      alquilerId: id,
    },
  })
    .then(async (respuesta) => {
      if (respuesta[0] !== 0) {
        let alquiler = await Alquiler.findByPk(id);
        return res.status(201).json({
          ok: true,
          content: alquiler,
          message: "Se actualizo el alquiler con exito",
        });
      } else {
        return res.status(401).json({
          ok: false,
          content: null,
          message: "No se encontro el alquiler",
        });
      }
    })
    .catch((error) => {
      return res.status(500).json({
        ok: false,
        content: error,
        message: "Hubo un error al actualizar el alquiler",
      });
    });
};
const eliminarAlquiler = async () => {
  let { id } = req.params;
  try {
    const alquiler = await Alquiler.destroy(id);
    return res.status(201).json({
      ok: true,
      content: alquiler,
      message: "Se elimino el alquiler con exito",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      content: error,
      message: "Hubo un error al eliminar el alquiler",
    });
  }
};
const listarAlquileres = async (req, res) => {
  try {
    const alquileres = await Alquiler.findAll();
    return res.status(201).json({
      ok: true,
      content: alquileres,
      message: "Listado de alquileres",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      content: error,
      message: "Huno un error al listar los alquileres",
    });
  }
};
const listarPorfecha = async (req, res) => {
  let { fecha } = req.params;
  try {
    const alquiler = await Alquiler.findAll({
      where: {
        alquilerFechaIn: fecha,
      },
    });
    return res.status(201).json({
      ok: true,
      content: alquiler,
      message: `Alquileres de la fecha: ${fecha}`,
    });
  } catch (error) {
    return res.status(500).json({
      ok: true,
      content: error,
      message: `Hubo un error al listar los alquileres de: ${fecha}`,
    });
  }
};
module.exports = {
  registrarAlquiler,
  actualizarAlquiler,
  eliminarAlquiler,
  listarAlquileres,
  listarPorfecha,
};
