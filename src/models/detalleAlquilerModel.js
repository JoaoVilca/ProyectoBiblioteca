const { DataTypes } = require('sequelize')

const detalle_alquiler_model = (conexion) => {
    const detalleAlquiler = conexion.define(
        'detalles', {
        detalleId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            field: 'detalquiler_id',
            autoIncrement: true
        },
        detallePrecio: {
            allowNull: false,
            field: 'detalquiler_precio',
            type: DataTypes.DECIMAL(5, 2)
        },
        detalleTotal: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            field: 'detalquiler_total'
        }
    },
        {
            tableName: 't_detalquiler',
            timestapms: false
        }
    )
    return detalleAlquiler
}
module.exports = detalle_alquiler_model