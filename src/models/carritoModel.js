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
        carritoSemanas: {
            type: DataTypes.INTEGER,
            field: 'carrito_semanas',
            allowNull: false
        },
    }, {
        tableName: 't_carrito',
        timestamps:true
    })
    return carrito
}
module.exports = carrito_model