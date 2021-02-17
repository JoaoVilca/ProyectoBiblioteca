const { Categoria } = require("../config/sequelize");

const crearCategoria = async (req, res) => {
  try {
    let nuevaCategoria = await Categoria.create(req.body);
    return res.status(201).json({
      ok: true,
      content: nuevaCategoria,
      message: "Categoria creada con exito",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      content: error,
      message: "Hubo un error al crear la categoria",
    });
  }
};
const listarCategorias = async (req, res) => {
  try {
    let categorias = await Categoria.findAll();
    return res.status(201).json({
      ok: true,
      content: categorias,
      message: "Lista de categorias",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      content: error,
      message: "Hubo un error al listar las categorias",
    });
  }
};
const actualizarCategoria = (req, res) => {
  // Rehacer utilizando then para validar la actualizacion correctamente
  let { id } = req.params;
  Categoria.update(req.body, {
    where: {
      categoriaId: id,
    },
  })
    .then(async (resultado) => {
      if (resultado[0] !== 0) {
        let categoria = await Categoria.findByPk(id);
        return res.status(201).json({
          ok: true,
          content: categoria,
          message: "Categoria actualizada con exito",
        });
      } else {
        return res.json({
          ok: false,
          content: null,
          message: "No se encontro la categoria",
        });
      }
    })
    .catch((error) => {
      return res.status(500).json({
        ok: false,
        content: error,
        message: "Hubo un error al actualizar la categoria",
      });
    });
};
const eliminarCategoria = async (req, res) => {
  try {
    let { id } = req.params;
    const categoria = await Categoria.destroy({
      where: {
        categoriaId: id,
      },
    });
    return res.status(201).json({
      ok: true,
      content: categoria,
      message: "Se elimino la categoria exitosamente",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      content: error,
      message: "Hubo un error al eliminar la categoria",
    });
  }
};
module.exports = {
  crearCategoria,
  listarCategorias,
  actualizarCategoria,
  eliminarCategoria,
};
