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
const actualizarCategoria = async (req, res) => {
    // Rehacer utilizando promesas para validar la actualizacion correctamente
    try{
        let {id} = req.params
        let categoria = await Categoria.findByPk(id)
        if(categoria){
            let nuevaCategoria = await Categoria.update(req.body,{
                where:{
                    categoriaId:id
                }
            })
            return res.status(201).json({
                ok:true,
                content:nuevaCategoria,
                message:'Categoria actualizada'
            })
        }else{
            return res.status(404).json({
                ok:false,
                content:null,
                message:'La categoria no existe'
            })
        }
    }catch(error){
        return res.status(500).json({
            ok:true,
            content:error,
            message:'Hubo un error al actualizar la categoria'
        })
    }
}
module.exports = {
  crearCategoria,
  listarCategorias,
  actualizarCategoria
};
