'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt');
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
          msg : 'Firstname tidak boleh kosong'
        }
       }
      },
    last_name: {
      type : DataTypes.STRING,
      validate : {
       notEmpty: {
         msg : 'Lastname tidak boleh kosong'
       }
      }
     },
    username: {
      type : DataTypes.STRING,
      validate : {
       notEmpty: {
         msg : 'Username tidak boleh kosong'
       }
      }
     },
    password: {
      type : DataTypes.STRING,
      validate : {
       notEmpty: {
         msg : 'Password tidak boleh kosong'
       },
       len : {
         args : [5,15],
         msg : 'Password minimal 5 karakter dan maksimal 15 karakter'
       }
      }
     },
    email: {
      type : DataTypes.STRING,
      validate : {
       notEmpty: {
         msg : 'Email tidak boleh kosong'
       },
       isEmail : {
         msg : 'Harus didalam format email'
       }
      }
     },
    age: {
      type : DataTypes.INTEGER,
      validate : {
       notEmpty: {
         msg : 'Age tidak boleh kosong'
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
  User.beforeCreate((instance,options)=>{
    instance.password = bcrypt.hashSync(instance.password,10)
  })
  return User;
};