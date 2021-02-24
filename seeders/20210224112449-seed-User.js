'use strict';

let users = [
  {
    first_name: 'rendra',
    last_name: 'makmur',
    username: 'rendra1795',
    password: 123123,
    email: 'rendra1795@gmail.com',
    age: 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    first_name: 'markus',
    last_name: 'daniel',
    username: 'markus.daniel',
    password: 123456,
    email: 'markus.daniel@gmail.com',
    age: 17,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
