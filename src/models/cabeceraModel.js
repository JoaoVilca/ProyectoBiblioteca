const { DataTypes } = require("sequelize");

const cabecera_model = (conexion) => {
  const cabecera = conexion.define(
    "cabeceras",
    {
      cabeceraId: {
        primaryKey: true,
        field: "cabalquiler_id",
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      cabeceraFecha: {
        type: DataTypes.STRING(45),
        allowNull: false,
        field: "cabalquiler_fecha",
      },
      cabeceraSubtotal: {
        type: DataTypes.DECIMAL(5, 2),
        field: "cabecera_subtotal",
        allowNull: false,
      },
      cabeceraIGV: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        field: "cabalquiler_igv",
      },
      cabeceraTotal: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        field: "cabalquiler_total",
      },
    },
    {
      tableName: "t_cabalquiler",
      timestamps: true,
    }
  );
  return cabecera;
};
module.exports = cabecera_model;
