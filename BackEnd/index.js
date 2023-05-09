const authRouter = require("./src/modules/auth/auth.router.js");
const userRouter = require("./src/modules/user/user.router.js");
const categoryRouter = require("./src/modules/category/category.router.js");
const medicineRouter = require("./src/modules/medicine/medicine.router.js");
// const cartRouter = require("./src/modules/cart/cart.router.js");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

const port = 5000;

app.use(express.json({})); //convert buffer date

app.use(cors());

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/medicine", medicineRouter);
// app.use("/cart", cartRouter);

app.all("*", (req, res, next) => {
  return res.json("Page Not Found 404");
});

app.listen(port, () => {
  console.log(`Server is Running on Port........${port}`);
});
