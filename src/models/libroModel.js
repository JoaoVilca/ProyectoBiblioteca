const { DataTypes } = require("sequelize");

const libro_model = (conexion) => {
  const libro = conexion.define(
    "libros",
    {
      libroId: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        field: "libro_id",
      },
      libroTitulo: {
        type: DataTypes.STRING(45),
        allowNull: false,
        field: "libro_titulo",
      },
      libroAutor: {
        type: DataTypes.STRING(45),
        field: "libro_autor",
        allowNull: false,
      },
      libroDescripcion: {
        type: DataTypes.TEXT,
        field: "libro_descripcion",
      },
      libroAnio: {
        type: DataTypes.INTEGER,
        field: "libro_anio",
      },
      libroEditorial: {
        type: DataTypes.STRING(45),
        field: "libro_editorial",
      },
      libroURL: {
        type: DataTypes.STRING(40),
        field: "libro_url",
        validate: {
          isUrl: true,
        },
        allowNull: false,
        unique: true,
      },
      libroCantidad: {
        type: DataTypes.INTEGER,
        field: "libro_cantidad",
        allowNull: false,
      },
      libroDescargas: {
        type: DataTypes.INTEGER,
        field: "libro_descargas",
        allowNull: false,
      },
    },
    {
      tableName: "t_libro",
      timestamps: false,
    }
  );
  return libro;
};
module.exports = libro_model;
