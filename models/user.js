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
      first_name: {
       type : DataTypes.STRING,
       validate : {
        notEmpty: {
          msg : 'firstname tidak boleh kosong'
        }
       }
      },
    last_name: {
      type : DataTypes.STRING,
      validate : {
       notEmpty: {
         msg : 'lastname tidak boleh kosong'
       }
      }
     },
    username: {
      type : DataTypes.STRING,
      validate : {
       notEmpty: {
         msg : 'username tidak boleh kosong'
       }
      }
     },
    password: {
      type : DataTypes.STRING,
      validate : {
       notEmpty: {
         msg : 'password tidak boleh kosong'
       },
       len : {
         args : [10,20],
         msg : 'password minimal 10 karakter dan maksimal 20 karakter'
       }
      }
     },
    email: {
      type : DataTypes.STRING,
      validate : {
       notEmpty: {
         msg : 'email tidak boleh kosong'
       },
       isEmail : {
         msg : 'harus didalam format email'
       }
      }
     },
    age: {
      type : DataTypes.INTEGER,
      validate : {
       notEmpty: {
         msg : 'AGE tidak boleh kosong'
       }
      }
     }
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