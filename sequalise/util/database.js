const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("item-product", "root", "tr@ilbl@zer123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
