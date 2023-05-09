const databaseConnection = require("../../../../DB/connection.js");

// get all category ( home page )
exports.getCategory = async (req, res) => {
  try {
    const category = await databaseConnection.query("SELECT * FROM category;");
    return res.json({ message: "Done", category: category });
  } catch (error) {
    return res.json({ message: "Catch Error", error });
  }
};

// get medicine of category  (page medicine)
exports.getMedOfCategory = async (req, res) => {
  try {
    const category = (
      await databaseConnection.query(
        `SELECT * FROM category WHERE id = ${req.params.categoryId}`
      )
    )[0];
    if (!category) {
      return res.json({ message: `In-valid category id` });
    }
    const medicine = await databaseConnection.query(
      `SELECT * FROM medicine WHERE categoryId = '${category.id}';`
    );

    return res.json({ message: "Done", medicineList: medicine });
  } catch (error) {
    return res.json({ message: "Catch Error", error });
  }
};

// create category token is required
exports.createCategory = async (req, res) => {
  try {
    if (req.user.roleType != "Admin") {
      return res.json({ message: "Not authorized Account" });
    }

    const name = req.body.name.toLowerCase();
    const description = req.body.description.toLowerCase();

    const isCategoryExist = (
      await databaseConnection.query(
        `SELECT * FROM category WHERE name = '${name}'`
      )
    )[0];
    if (isCategoryExist) {
      return res.json({ message: `Duplicate category name ${name}` });
    }

    await databaseConnection.query("INSERT INTO category SET ?", {
      name,
      description,
    });

    return res.json({ message: "Done", category: { name, description } });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Catch Error", error });
  }
};

//upaate category token is required
exports.updateCategory = async (req, res) => {
  try {
    if (req.user.roleType != "Admin") {
      return res.json({ message: "Not authorized Account" });
    }

    const isCategoryExist = (
      await databaseConnection.query(
        `SELECT * FROM category WHERE id = '${req.params.categoryId}'`
      )
    )[0];
    if (!isCategoryExist) {
      return res.json({ message: `In-valid category id` });
    }
    if (req.body["name"] && isCategoryExist.name === req.body["name"]) {
      return res.json({
        message: `Duplicate category name ${req.body["name"]}`,
      });
    }

    isCategoryExist.name = req.body["name"]
      ? req.body["name"].toLowerCase()
      : isCategoryExist.name;
    isCategoryExist.description = req.body["description"]
      ? req.body["description"].toLowerCase()
      : isCategoryExist.description;

    await databaseConnection.query(
      `UPDATE category SET ? WHERE id = ${req.params.categoryId}`,
      isCategoryExist
    );

    return res.json({
      message: "Done",
      category: isCategoryExist,
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Catch Error", error });
  }
};

//delete category token is required
exports.deleteCategory = async (req, res) => {
  try {
    if (req.user.roleType != "Admin") {
      return res.json({ message: "Not authorized Account" });
    }

    await databaseConnection.query(
      `DELETE FROM category WHERE id = ${req.params.categoryId}`
    );

    return res.json({ message: "Done" });
  } catch (error) {
    return res.json({ message: "Catch Error", error });
  }
};
