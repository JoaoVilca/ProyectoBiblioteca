const jwt = require("jsonwebtoken");
const secret = process.env.JWT || "alquiler";
const { Usuario } = require("../config/sequelize");

const verificarToken = (token) => {
  try {
    const payload = jwt.verify(token, secret, { algorithm: "RS256" });
    return payload;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
const generarToken = ({ id }) => {
  const payload = {
    usuarioId: id,
  };
  const token = jwt.sign(
    payload,
    secret,
    { expiresIn: 120 },
    { algorithm: "RS256" }
  );
  return token;
};
const wachiman = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const respuesta = verificarToken(token);
    if (respuesta) {
      req.user = respuesta;
      next();
    } else {
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
module.exports = {
  generarToken,
  wachiman,
  verificarToken,
};
