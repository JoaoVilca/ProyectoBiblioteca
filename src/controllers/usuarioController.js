const { Usuario } = require("../config/sequelize");
const { generarToken } = require("../utils/validador");

const crearUsuario = async (req, res) => {
  try {
    let nuevoUsuario = Usuario.build(req.body);
    nuevoUsuario.setSaltAndHash(req.body.password);
    await nuevoUsuario.save();

    console.log(nuevoUsuario.usuarioSalt);
    return res.status(201).json({
      ok: true,
      content: nuevoUsuario,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      content: error,
      message: "Hubo un error al crear el usuario",
    });
  }
};
const login = async (req, res) => {
  let { correo, password } = req.body;
  const usuarioEncontrado = await Usuario.findOne({
    where: {
      usuarioCorreo: correo,
    },
  });
  console.log(correo);
  console.log(usuarioEncontrado);
  if (usuarioEncontrado) {
    let resultado = usuarioEncontrado.validarPassword(password);
    console.log(resultado);
    if (resultado == true) {
      return res.json({
        ok: true,
        content: [
          usuarioEncontrado.usuarioTipo,
          generarToken(usuarioEncontrado.usuarioId),
        ],
      });
    }
  }
  return res.status(400).json({
    ok: false,
    content: null,
    message: "Usuario o contraseña incorrectos",
  });
};
module.exports = {
  crearUsuario,
  login,
};
