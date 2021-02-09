const { DataTypes } = require('sequelize')

const alquiler_model = (conexion) => {
     const alquiler = conexion.define('alquileres', {
        alquilerId: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            field: 'alquiler_id'
        },
        alquilerFechaIn: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'alquiler_fechain',
            defaultValue: Date.now()
        },
        alquilerFechaFin: {
            type: DataTypes.DATE,
            field: 'alquiler_fechafin',
            allowNull: false
        }
    }, {
        tableName: 't_alquiler',
        timestamps: false
    })
    return alquiler
}
module.exports = alquiler_model