'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductionHouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductionHouse.hasMany(models.Movie, { foreignKey: "ProductionHouseId" })
    }
  };
  ProductionHouse.init({
    name: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductionHouse',
  });
  return ProductionHouse;
};