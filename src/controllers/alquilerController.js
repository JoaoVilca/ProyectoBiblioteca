const {
  DetalleAlquiler,
  conexion,
  Usuario,
  Libro,
  Cabecera,
  Carrito,
} = require("../config/sequelize");

const crearAlquiler = async (req, res) => {
  const transaccion = await conexion.transaction();
  let { fecha, subtotal, igv, total, usuario, libros } = req.body;
  try {
    let usuarioEncontrado = await Usuario.findByPk(usuario);
    let libroEncontrado = true;
    for (const key in libros) {
      let libro = await Libro.findOne({
        where: {
          libroId: libros[key].libro,
        },
      });
      if (libro === null) {
        libroEncontrado = false;
        break;
      }
    }
    if (libroEncontrado === false || usuarioEncontrado === null) {
      return res.status(400).json({
        ok: false,
        content: null,
        message: "Producto o usuario incorrectos, intente nuevamente",
      });
    }
    let cabeceraCreada = await Cabecera.create(
      {
        cabeceraFecha: fecha,
        cabeceraSubtotal: subtotal,
        cabeceraIGV: igv,
        cabeceraTotal: total,
        usuario_id: usuarioEncontrado.usuarioId,
      },
      { transaction: transaction }
    );
    for (posicion in libros) {
      let libro = await Libro.findByPk(libros[posicion].libro);
      await DetalleAlquiler.create(
        {
          detallePrecioSemana: libro.libroPrecioSemana,
          detalleCantidadSemanas: libros[posicion].semanas,
          detalleTotal: libro.libroPrecioSemana * libros[posicion].semanas,
          libro_id: libro.libroId,
          cabalquiler_id: cabeceraCreada.cabeceraId,
        },
        {
          transaction: transaccion,
        }
      );
    }
    let carritoEncontrado = await Carrito.findOne({
      where: {
        usuario_id: usuarioEncontrado.usuarioId,
      },
    });
    if (carritoEncontrado) {
      Carrito.destroy(
        {
          where: {
            usuario_id: usuarioEncontrado.usuarioId,
          },
        },
        { transaction: transaccion }
      );
    }
    await transaccion.commit();
    return res.status(201).json({
      ok: true,
      content: null,
      message: "El alquiler se realizo con exito",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      content: error,
      message: "Hubo un error al crear el alquiler",
    });
  }
};

module.exports = {
  crearAlquiler,
};
