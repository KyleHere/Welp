'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Businesses', [
        {id: 1, ownerId: 1, title: '', description: '', lat: 32.86, lng:32.87, address: '', city: '', state: '', zipCode: ''},

      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
