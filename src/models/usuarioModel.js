const { DataTypes } = require("sequelize");

const usuario_model = (conexion) => {
  const usuario = conexion.define(
    "usuarios",
    {
      usuarioId: {
        primeryKey: true,
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
        unique:true,
        validate: {
          isEmail: true,
        },
        field: "usuario_correo",
      },
      usuarioDNI: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "usuario_dni",
        unique:true
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
    },
    {
      tableName: "t_usuario",
      timestapms: false,
    }
  );
  return usuario;
};
module.exports = usuario_model;
