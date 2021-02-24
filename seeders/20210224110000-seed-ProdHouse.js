'use strict';

let productionHouse = [
  {
    name: 'Atresmedia Vancouver Media',
    country: 'Spain',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Wit Studio',
    country: 'Japan',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'HiSTORY D&C',
    country: 'Korea',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: '21 Laps Entertainment',
    country: 'USA',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Overbrook Entertainment',
    country: 'USA',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Gaumont International Television',
    country: 'USA',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Ghibli Studio',
    country: 'Japan',
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
    return queryInterface.bulkInsert('ProductionHouses', productionHouse, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkInsert('ProductionHouses', null, {});
  }
};
