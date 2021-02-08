const { DataTypes } = require("sequelize");

const imagen_model = (conexion) => {
  const imagen = conexion.define(
    "imagenes",
    {
      imagenId: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "imagen_id",
      },
      imagenURL: {
        type: DataTypes.TEXT,
        field: "imagen_url",
      },
    },
    {
      tableName: "t_imagen",
      timestamps: false,
    }
  );
  return imagen;
};
module.exports = imagen_model;
