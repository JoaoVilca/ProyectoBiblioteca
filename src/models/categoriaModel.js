const { DataTypes } = require("sequelize");

const categoria_model = (conexion) => {
  const categoria = conexion.define(
    "categorias",
    {
      categoriaId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
        field:'categoria_id'
      },
      categoriaNombre: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
        field:'categoria_nombre'
      },
    },
    {
      tableName: "t_categoria",
      timestamps: true,
    }
  );
  return categoria;
};
module.exports = categoria_model;
