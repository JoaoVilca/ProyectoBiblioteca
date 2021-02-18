const { Sequelize } = require("sequelize");
const libro_model = require("../models/libroModel");
const categoria_model = require("../models/categoriaModel");
const carrito_model = require("../models/carritoModel");
const imagen_model = require("../models/imagenModel");
const usuario_model = require("../models/usuarioModel");
const detalle_alquiler_model = require("../models/detalleAlquilerModel");
const cabecera_model = require("../models/cabeceraModel");

const conexion = new Sequelize("bibliotecaVirtual", "root", "123456", {
  host: "127.0.0.1",
  port: "3306",
  dialect: "mysql",
  timezone: "-05:00",
  logging: false,
  dialectOptions: {
    dateStrings: true,
  },
});

const Libro = libro_model(conexion);
const Categoria = categoria_model(conexion);
const Carrito = carrito_model(conexion);
const Imagen = imagen_model(conexion);
const Usuario = usuario_model(conexion);
const DetalleAlquiler = detalle_alquiler_model(conexion);
const Cabecera = cabecera_model(conexion);

Categoria.hasMany(Libro, {foreignKey:{name:'categoria_id', allowNull:false}})
Libro.belongsTo(Categoria, {foreignKey:'categoria_id'})

Libro.hasMany(Carrito, {foreignKey:{name:'libro_id', allowNull:false}})
Carrito.belongsTo(Libro, {foreignKey:'libro_id'})

Imagen.hasOne(Libro,{foreignKey:{name:'imagen_id', allowNull:false}})
Libro.belongsTo(Imagen, {foreignKey:'imagen_id'})

Imagen.hasOne(Usuario, {foreignKey:{name:'imagen_id'}})
Usuario.belongsTo(Imagen, {foreignKey:'imagen_id'})

Usuario.hasOne(Carrito,{foreignKey:{name:'usuario_id', allowNull:false}})
Carrito.belongsTo(Usuario, {foreignKey:'usuario_id'})

Usuario.hasMany(Cabecera, {foreignKey:{name:'usuario_id', allowNull:false}})
Cabecera.belongsTo(Usuario, {foreignKey:'usuario_id'})

Cabecera.hasMany(DetalleAlquiler, {foreignKey:{name:'cabecera_id', allowNull:false}})
DetalleAlquiler.belongsTo(Cabecera, {foreignKey:'cabecera_id'})

Libro.hasMany(DetalleAlquiler, {foreignKey:{name:'libro_id', allowNull:false}})
DetalleAlquiler.belongsTo(Libro, {foreignKey:'libro_id'})

module.exports = {
  conexion,
  Usuario,
  Cabecera,
  DetalleAlquiler,
  Imagen,
  Carrito,
  Categoria,
  Libro,
};
