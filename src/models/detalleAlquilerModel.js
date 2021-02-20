const { DataTypes } = require("sequelize");

const detalle_alquiler_model = (conexion) => {
  const detalleAlquiler = conexion.define(
    "detalles",
    {
      detalleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: "detalquiler_id",
        autoIncrement: true,
      },
      detallePrecioSemana: {
        allowNull: false,
        field: "detalquiler_precio_semana",
        type: DataTypes.DECIMAL(5, 2),
      },
      detalleCantidadSemanas: {
        type: DataTypes.INTEGER,
        field: "detalle_semanas",
        allowNull: false,
      },
      detalleTotal: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        field: "detalquiler_total",
      },
    },
    {
      tableName: "t_detalquiler",
      timestamps: true,
    }
  );
  return detalleAlquiler;
};
module.exports = detalle_alquiler_model;
