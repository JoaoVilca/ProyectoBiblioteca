const { Libro, Alquiler, Usuario, Categoria } = require("../config/sequelize");

const crearLibro = async (req, res) => {
  const {
    titulo,
    autor,
    descripcion,
    anio,
    editorial,
    url,
    precio,
    descargas,
    categoria,
  } = req.body;
  try {
    let categoriaEncontrada = await Categoria.findByPk(categoria);
    console.log(titulo)
    console.log(categoriaEncontrada.categoriaId);
    if (categoriaEncontrada) {
      let nuevoLibro = await Libro.create({
        libroTitulo:titulo,
        libroAutor:autor,
        libroDescripcion:descripcion,
        libroAnio:anio,
        libroEditorial:editorial,
        libroURL:url,
        libroPrecioSemana:precio,
        libroDescargas:descargas,
        categoria_id:categoria,
      });
      return res.json({
        ok: true,
        content: nuevoLibro,
        message: "Libro creado con exito",
      });
    } else {
      return res.json({
        ok: false,
        content: null,
        message: "No existe la categoria",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      content: error,
      message: "Hubo un error al crear el libro",
    });
  }
};
const actualizarLibro = (req, res) => {
  let { id } = req.params;

  Libro.update(req.body, {
    where: {
      libroId: id,
    },
  })
    .then(async (respuesta) => {
      if (respuesta[0] !== 0) {
        let libro = await Libro.findByPk(id);
        return res.status(201).json({
          ok: true,
          content: libro,
          message: "Se actualizo exitosamente el libro",
        });
      } else {
        return res.status(401).json({
          ok: false,
          content: null,
          message: "No se encontro el libro",
        });
      }
    })
    .catch((error) => {
      return res.status(500).json({
        ok: false,
        content: error,
        message: "Hubo un error al actualizar el libro",
      });
    });
};
const eliminarLibro = async (req, res) => {
  try {
    let { id } = req.params;
    const libro = await Libro.destroy({
      where: {
        libroId: id,
      },
    });
    return res.status(201).json({
      ok: true,
      content: libro,
      message: "Se elimino el libro exitosamente",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      content: error,
      message: "Hubo un error al eliminar el libro",
    });
  }
};
const listarLibros = async (req, res) => {
  try {
    const libros = await Libro.findAll();
    return res.status(201).json({
      ok: true,
      content: libros,
      message: "Listado de todos los libros",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      content: error,
      message: "Hubo un error al listar los libros",
    });
  }
};
const listarLibrosPorId = async (req, res) => {
  let { id } = req.params;

  try {
    const libro = await Libro.findByPk(id);
    return (
      res.status(201),
      json({
        ok: true,
        content: libro,
        message: "Libro encontrado",
      })
    );
  } catch (error) {
    returnres.status(500).json({
      ok: false,
      content: error,
      message: "Hubo un error al buscar el libro",
    });
  }
};
const listarPorUsuario = async (req, res) => {
  let { id } = req.params;
  try {
    const alquilerUsuario = await Alquiler.findAll({
      where: {
        usuarioId: id,
        includes: {
          model: Usuario,
          attributes: [usuarioNombre, usuarioApellido],
        },
      },
    });
    return res.status(201).json({
      ok: true,
      content: alquilerUsuario,
      message: `Alquileres del usuario: ${alquilerUsuario.usuarioId}`,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      content: error,
      message: "Hubo un error al listar los alquileres del usuario",
    });
  }
};
module.exports = {
  crearLibro,
  actualizarLibro,
  eliminarLibro,
  listarLibros,
  listarLibrosPorId,
  listarPorUsuario,
};
