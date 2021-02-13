const { DataTypes } = require("sequelize");
const crypto = require("crypto");

const usuario_model = (conexion) => {
  let usuario = conexion.define(
    "usuarios",
    {
      usuarioId: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "usuario_id",
      },
      usuarioNombre: {
        type: DataTypes.STRING(45),
        allowNull: false,
        field: "usuario_nombre",
      },
      usuarioApellido: {
        type: DataTypes.STRING(45),
        allowNull: false,
        field: "usuario_apellido",
      },
      usuarioCorreo: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
        field: "usuario_correo",
      },
      usuarioDNI: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "usuario_dni",
        unique: true,
      },
      usuarioTipo: {
        type: DataTypes.INTEGER,
        defaultValue: 2,
        field: "usuario_tipo",
      },
      usuarioHash: {
        type: DataTypes.TEXT,
        field: "usuario_hash",
      },
      usuarioSalt: {
        type: DataTypes.TEXT,
        field: "usuario_salt",
      },
    },
    {
      tableName: "t_usuario",
      timestapms: false,
    }
  );
  usuario.prototype.setSaltAndHash = function (password) {
    this.usuarioSalt = crypto.randomBytes(16).toString("hex");
    this.usuarioHash = crypto
      .pbkdf2Sync(password, this.usuarioSalt, 1000, 64, "sha512")
      .toString("hex");
  };
  usuario.prototype.validarPassword = function (password) {
    let hashTemporal = crypto
      .pbkdf2Sync(password, this.usuarioSalt, 1000, 64, "sha512")
      .toString("hex");
    return hashTemporal === this.usuarioHash ? true : false;
  };
  return usuario;
};
module.exports = usuario_model;
