const bcrypt = require("bcryptjs");

exports.hash = async ({ plainText, saltRound = 8 } = {}) => {
  const hashResult = await bcrypt.hash(plainText, saltRound);
  return hashResult;
};

exports.compare = async ({ plainText, hashVlaue } = {}) => {
  const match = await bcrypt.compare(plainText, hashVlaue);
  return match;
}; // ture or false
