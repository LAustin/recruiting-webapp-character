export const getModifier = function (attributeScore) {
  return Math.trunc((attributeScore - 10) * 0.5);
};

export const getPointsToSpend = function (intelligenceModifier) {
  return 10 + 4 * intelligenceModifier;
};

export const generateRoll = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
