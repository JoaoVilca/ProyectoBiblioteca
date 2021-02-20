const { Carrito } = require("../config/sequelize");

const crearCarrito = async (req, res) => {
  const {carritoSemanas, libro}=req.body
  const { usuarioId } = req.user;
  try {
    const carrito = await Carrito.create({
      carritoSemanas:carritoSemanas,
      libro_id:libro,
      usuario_id: usuarioId,
    });
    return res.status(201).json({
      ok: true,
      content: carrito,
      message: "Carrito creado con exito",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      content: error,
      message: "Hubo un error al crear el carrito",
    });
  }
};
const eliminarCarrito = async (req, res) => {
  let { id } = req.params;
  try {
    const carrito = await Carrito.destroy(id);
    return res.status(201).json({
      ok: true,
      content: carrito,
      message: "Se elimino el carrito con exito",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      content: error,
      message: "Hubo un error al eliminar el carrito",
    });
  }
};
module.exports = {
  crearCarrito,
  eliminarCarrito,
};
