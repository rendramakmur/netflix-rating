'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.ProductionHouse, { foreignKey: "ProductionHouseId" })
      Movie.belongsToMany(models.User, { through: models.Rating })
    }
  };
  Movie.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    released_year: DataTypes.INTEGER,
    movie_type: DataTypes.INTEGER,
    ProductionHouseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};