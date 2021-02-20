const jwt = require("jsonwebtoken");
const secret = process.env.JWT || "alquiler";
const { Usuario } = require("../config/sequelize");

const verificarToken = (token) => {
  try {
    const payload = jwt.verify(token, secret, { algorithm: "HS256" });
    return payload;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
const generarToken = ({ id, nombre }) => {
  const payload = {
    usuarioId: id,
    usuarioNombre: nombre,
  };
  const token = jwt.sign(
    payload,
    secret,
    { expiresIn: 120 },
    { algorithm: "HS256" }
  );
  return token;
};
const wachiman = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const respuesta = verificarToken(token);
    console.log(respuesta);
    if (typeof respuesta === "object") {
      req.user = respuesta;
      console.log(req.user)
      next();
    } else {
      console.log('Error')
      res.status(401).json({
        ok: false,
        message: "No estas autorizado para realizar esta solicitud",
      });
    }
  } else {
    res.status(401).json({
      ok: false,
      message: "Necesitas estar autorizado para realizar esta peticion",
    });
  }
};
const validarAdmin = (req, res, next) => {};
module.exports = {
  generarToken,
  wachiman,
  verificarToken,
};
