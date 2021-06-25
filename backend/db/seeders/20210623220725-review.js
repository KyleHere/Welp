'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {userId: 1, businessId: 1, rating: 4, reviewText: 'Really great coffee!'},
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
      return queryInterface.bulkDelete('Reviews', {
        businessId: {[Op.in]: [1]}
      }, {});

  }
};
