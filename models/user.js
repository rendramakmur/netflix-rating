'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Movie, { through: models.Rating })
    }
  };
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(instance, options) {
        let generateUsername = '';
        for (let i = 0; i < instance.email.length; i++) {
            if (instance.email[i] === '@') {
              break;
            } else {
              generateUsername += instance.email[i]
            }
        }
        instance.username = generateUsername;
      },
      beforeUpdate(instance, options) {
        let generateUsername = '';
        for (let i = 0; i < instance.email.length; i++) {
            if (instance.email[i] === '@') {
              break;
            } else {
              generateUsername += instance.email[i]
            }
        }
        instance.username = generateUsername;
      }
    }
  });
  return User;
};