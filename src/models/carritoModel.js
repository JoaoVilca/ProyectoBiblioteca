const { DataTypes } = require('sequelize')

const carrito_model = (conexion) => {
    const carrito = conexion.define('carritos', {
        carritoId: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            field: 'carrito_id',
            type: DataTypes.INTEGER
        },
        carritoCantidad: {
            type: DataTypes.INTEGER,
            field: 'carrito_cantidad',
            allowNull: false
        }
    }, {
        tableName: 't_carrito',
        timestamps: false
    })
    return carrito
}
module.exports = carrito_model