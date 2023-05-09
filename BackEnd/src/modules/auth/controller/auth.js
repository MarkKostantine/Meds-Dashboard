const databaseConnection = require("../../../../DB/connection");
const { hash, compare } = require("../../../utils/Hash&Compare.js");
const { generateToken } = require("../../../utils/generate&VerifyToken.js");

exports.signUp = async (req, res) => {
  try {
    const { email, password, cPassword, phone } = req.body; // dustructing
    if (password != cPassword) {
      return res.json({ message: "confirmationPassword misMatch password" });
    }
    const checakUser = (
      await databaseConnection.query(
        `SELECT * FROM users WHERE email = '${email}'`
      )
    )[0]; // object info user or null not find user
    if (checakUser) {
      return res.json({ message: "Exist Email" });
    }
    const hashPassword = await hash({ plainText: password });
    await databaseConnection.query("INSERT INTO users SET ?", {
      email,
      password: hashPassword,
      phone,
    });

    return res.json({
      message: "Done",
      user: { email, phone },
    });
  } catch (error) {
    return res.json({ message: "Catch Error", error });
  }
};

exports.logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = (
      await databaseConnection.query(
        `SELECT * FROM users WHERE email = '${email}'`
      )
    )[0];

    if (!user) {
      return res.json({ message: "In-Valid Email" });
    }
    const match = await compare({
      plainText: password,
      hashVlaue: user.password,
    });
    if (!match) {
      return res.json({ message: "In-Valid Password" });
    }
    await databaseConnection.query("UPDATE users SET ?", { status: "active" });
    const token = generateToken({
      payload: { id: user.id, role: user.roleType, isLoggedIn: true },
    });

    return res.json({ message: "Done", token, roleType: user.roleType });
  } catch (error) {
    return res.json({ message: "Catch Error", error });
  }
};
