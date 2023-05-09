const jwt = require("jsonwebtoken");

exports.generateToken = ({ payload = {}, signature = "project2013" } = {}) => {
  const token = jwt.sign(payload, signature);
  return token;
};

exports.verifyToken = ({ token, signature = "project2013" } = {}) => {
  const decoded = jwt.verify(token, signature);
  return decoded;
};
