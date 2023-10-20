'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: '747-400',
        capacity: 416,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'A380-800',
        capacity: 853,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: '737-800',
        capacity: 189,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'A320neo',
        capacity: 194,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'E190',
        capacity: 114,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
