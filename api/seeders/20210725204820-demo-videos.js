'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Videos', [{
      titulo: "Death's Door - Um Dark Souls isométrico, sombrio e intrigante para PC e XBOX.",
      descricao: 'Primeiras impressões de Death’s Door, novo título da Acid Nerve, publicado pela Devolver Digital para Xbox Series X/S e PC. Jogo de ação e aventura que você joga com um corvo que coleta almas perdidas. Precisa de muito para fazer um jogo interessante?',
      url: 'https://www.youtube.com/watch?v=NRotgdT87fg&ab_channel=RodrigoBaltar',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      titulo: "Asmongold Hosts FIRST EVER FFXIV Transmog Competition | ft. Zepla & Rich",
      descricao: 'IT ACTUALLY HAPPENED! Asmongold hosts the first ever Transmog/Glamour Competition in Final Fantasy 14, the literal god is joined by Zepla and Rich for the ultimate FF14 contest event...',
      url: 'https://www.youtube.com/watch?v=Gt4Ts8oqBQs&ab_channel=AsmongoldTV',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      titulo: "Entrevista com Thaiga e Tinowns | Play Night com Baiano",
      descricao: 'No primeiro episódio da primeira temporada o Play Night com Baiano recebe Thaiga e Tinowns! Eles contaram um pouco mais sobre a trajetória deles no cenário, planos para o futuro e curiosidades sobre o casal.',
      url: 'https://www.youtube.com/watch?v=Ij4q7xOYw7E&ab_channel=PlayNightcomBaiano',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Videos', null, {});
  }
};
