const { Sequelize } = require("sequelize");

const conexion = new Sequelize("biblioteca", "root", "123456", {
  host: "127.0.0.1",
  dialect: "mysql",
  timezone: "-05:00",
  logging: false,
  dialectOptions: {
    dateStrings: true,
  },
});
module.exports = {
  conexion,
};
