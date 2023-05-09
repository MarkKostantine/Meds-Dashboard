const databaseConnection = require("../../../../DB/connection.js");

// get all medicine (page admin)
exports.getAllMedicine = async (req, res) => {
  try {
    const medicine = await databaseConnection.query("SELECT * FROM medicine;");
    return res.json({ message: "Done", medicine });
  } catch (error) {
    return res.json({ message: "Catch Error", error });
  }
};

// create Medicine token is required
exports.createMedicine = async (req, res) => {
  try {
    if (req.user.roleType != "Admin") {
      return res.json({ message: "Not authorized Account" });
    }

    const { name, categoryName, expireDate } = req.body;

    const checkcategory = (
      await databaseConnection.query(
        `SELECT * FROM category WHERE name = '${categoryName}'`
      )
    )[0];
    if (!checkcategory) {
      return res.json({ message: `category is not found` });
    }

    const checkmedicine = (
      await databaseConnection.query(
        `SELECT * FROM medicine WHERE name = '${name}'`
      )
    )[0];
    if (checkmedicine) {
      return res.json({ message: `medicine is already Exist ${name}` });
    }

    if (new Date(expireDate).getTime() < new Date().getTime()) {
      return res.json({
        message: `The expiry date has already expired ${expireDate}`,
      });
    }

    delete req.body.categoryName;
    await databaseConnection.query("INSERT INTO medicine SET ? ", {
      ...req.body,
      categoryId: checkcategory.id,
    });

    return res.json({
      message: "Done",
      medicine: { ...req.body, categoryId: checkcategory.id },
    });
  } catch (error) {
    return res.json({ message: "Catch Error", error });
  }
};

// update Medicinee token is required
exports.updateMedicine = async (req, res) => {
  try {
    if (req.user.roleType != "Admin") {
      return res.json({ message: "Not authorized Account" });
    }

    const medicine = (
      await databaseConnection.query(
        `SELECT * FROM medicine WHERE id = '${req.params.medicineId}'`
      )
    )[0];
    if (!medicine) {
      return res.json({ message: "In-Valid medicine ID " });
    }

    if (req.body.name) {
      medicine.name = req.body.name;
    }

    if (req.body.description) {
      medicine.description = req.body.description;
    }

    if (req.body.price) {
      medicine.price = req.body.price;
    }

    if (req.body.expireDate) {
      if (new Date(req.body.expireDate).getTime() < new Date().getTime()) {
        return res.json({
          message: `The expiry date has already expired ${req.body.expireDate}`,
        });
      }
      medicine.expireDate = req.body.expireDate;
    }

    if (req.body.categoryName) {
      const checkcategory = (
        await databaseConnection.query(
          `SELECT * FROM category WHERE name = '${req.body.categoryName}'`
        )
      )[0];
      if (!checkcategory) {
        return res.json({ message: `category is not found` });
      }
      medicine.categoryId = checkcategory.id;
    }

    await databaseConnection.query(
      `UPDATE medicine SET ? WHERE id = ${req.params.medicineId};`,
      medicine
    );

    return res.json({ message: "Done", medicine });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Catch Error", error });
  }
};

// delete Medicinee token is required
exports.deleteMedicine = async (req, res) => {
  try {
    if (req.user.roleType != "Admin") {
      return res.json({ message: "Not authorized Account" });
    }

    await databaseConnection.query(
      `DELETE FROM medicine WHERE id = ${req.params.medicineId}`
    );

    return res.json({ message: "Done" });
  } catch (error) {
    return res.json({ message: "Catch Error", error });
  }
};
