'use strict';

let movies = [
  {
    name: 'Money Heist',
    description: "",
    duration: 50,
    released_year: 2013,
    movie_type: 'series',
    trailer_url: 'https://www.youtube.com/embed/TFJwUwnShnA',
    ProductionHouseId: 1,
    createdAt: new Date(),
    updatedAt: new Date() 
  },
  {
    name: 'Attack on Titan',
    description: "",
    duration: 40,
    released_year: 2014,
    movie_type: 'series',
    trailer_url: 'https://www.youtube.com/embed/MGRm4IzK1SQ',
    ProductionHouseId: 2,
    createdAt: new Date(),
    updatedAt: new Date() 
  },
  {
    name: 'Start-up',
    description: "",
    duration: 65,
    released_year: 2013,
    movie_type: 'series',
    trailer_url: 'https://www.youtube.com/embed/Lu3o0XrlsAg',
    ProductionHouseId: 3,
    createdAt: new Date(),
    updatedAt: new Date() 
  },
  {
    name: 'Stranger Things',
    description: "",
    duration: 51,
    released_year: 2016,
    movie_type: 'series',
    trailer_url: 'https://www.youtube.com/embed/b9EkMc79ZSU',
    ProductionHouseId: 4,
    createdAt: new Date(),
    updatedAt: new Date() 
  },
  {
    name: 'I Am Not Okay With This',
    description: "",
    duration: 30,
    released_year: 2016,
    movie_type: 'series',
    ProductionHouseId: 4,
    trailer_url: 'https://www.youtube.com/embed/b9EkMc79ZSU',
    createdAt: new Date(),
    updatedAt: new Date() 
  },
  {
    name: 'To The Boys I Loved Before',
    description: "",
    duration: 99,
    released_year: 2018,
    movie_type: 'movie',
    ProductionHouseId: 5,
    trailer_url: 'https://www.youtube.com/embed/BmXxfsZPeu0',
    createdAt: new Date(),
    updatedAt: new Date() 
  },
  {
    name: 'Narcos',
    description: "",
    duration: 49,
    released_year: 2015,
    movie_type: 'series',
    ProductionHouseId: 6,
    trailer_url: 'https://www.youtube.com/embed/xl8zdCY-abw',
    createdAt: new Date(),
    updatedAt: new Date() 
  },
  {
    name: 'Spirited Away',
    description: "",
    duration: 125,
    released_year: 2001,
    movie_type: 'movie',
    trailer_url: 'https://www.youtube.com/embed/xy6UmYImUPI',
    ProductionHouseId: 7,
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
    return queryInterface.bulkInsert('Movies', movies, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
