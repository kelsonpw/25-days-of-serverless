'use strict';

const dreidelSides = ['נ (Nun)', 'ג (Gimmel)', 'ה (Hay)', 'ש (Shin)'];

const getRandomSide = () =>
  dreidelSides[Math.floor(Math.random() * dreidelSides.length)];

module.exports.handler = async function(ctx) {
  ctx.log('JavaScript dreidel function processed a request.');

  ctx.res = {
    status: 400,
    body: getRandomSide(),
  };
};
