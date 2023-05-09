const databaseConnection = require("../../DB/connection.js");
const { verifyToken } = require("../utils/generate&VerifyToken.js");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.json({ message: "token is requierd" });
    }
    const decoded = verifyToken({ token });

    const authUser = (
      await databaseConnection.query(
        `SELECT * FROM users WHERE id = '${decoded.id}'`
      )
    )[0];
    if (!authUser) {
      return res.json({ message: "Not register account" });
    }
    req.user = authUser;
    return next();
  } catch (error) {
    return res.json({ message: "Not register account", error });
  }
};

module.exports = auth;
