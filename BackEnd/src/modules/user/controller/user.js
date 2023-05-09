const databaseConnection = require("../../../../DB/connection.js");

const selectedColumnsFromUser = "id , email , phone , status , roleType";

// get all user token is required (page admin)
exports.getAlluser = async (req, res) => {
  try {
    if (req.user.roleType != "Admin") {
      return res.json({ message: "Not authorized Account" });
    }

    const users = await databaseConnection.query(
      `SELECT ${selectedColumnsFromUser} FROM users WHERE roleType = 'Patient';`
    );

    return res.json({ message: "Done", userList: users });
  } catch (error) {
    return res.json({ message: "Catch Error", error });
  }
};

// update user (Admin)
exports.updateUser = async (req, res) => {
  try {
    if (req.user.roleType != "Admin") {
      return res.json({ message: "Not authorized Account" });
    }
    const { phone, roleType } = req.body;

    const user = (
      await databaseConnection.query(
        `SELECT ${selectedColumnsFromUser} FROM users WHERE id = ${req.params.userId};`
      )
    )[0];
    if (!user) {
      return res.json({ message: "In-Valid user ID" });
    }

    if (phone) {
      user.phone = phone;
    }

    if (roleType) {
      user.roleType = roleType;
    }

    await databaseConnection.query(
      `UPDATE users SET ? WHERE id = ${req.params.userId}`,
      user
    );

    return res.json({ message: "Done", user });
  } catch (error) {
    return res.json({ message: "Catch Error", error });
  }
};

// delete user (Admin)
exports.deleteUser = async (req, res) => {
  try {
    if (req.user.roleType != "Admin") {
      return res.json({ message: "Not authorized Account" });
    }

    await databaseConnection.query(
      `DELETE FROM users WHERE id = ${req.params.userId}`
    );

    return res.json({ message: "Done" });
  } catch (error) {
    return res.json({ message: "Catch Error" });
  }
};

exports.adminResponseForRequest = async (req, res) => {
  try {
    const action = req.body.action.toLowerCase();
    if (req.user.roleType != "Admin") {
      return res.json({ message: "Not authorized Account" });
    }

    const request = (
      await databaseConnection.query(
        `SELECT * FROM request WHERE id = ${req.params.reqId}`
      )
    )[0];
    if (!request) {
      return res.json({ message: "In-Valid user ID" });
    }

    if (action == "accepted") {
      request.action = "accepted";
    } else if (action == "rejected") {
      request.action = "rejected";
    } else {
      return res.json({ message: `accepted or rejected only` });
    }

    await databaseConnection.query(
      `UPDATE request SET ? WHERE id = ${req.params.reqId}`,
      request
    );

    return res.json({ message: "Done", request });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Catch Error", error });
  }
};

exports.createRequest = async (req, res) => {
  try {
    const { medicineId } = req.body;

    if (req.user.roleType != "Patient") {
      return res.json({ message: "Not authorized Account" });
    }

    await databaseConnection.query("INSERT INTO request SET ?", {
      medicineId,
      userId: req.user.id,
    });

    return res.json({
      message: "Done",
      request: { medicineId, userId: req.user.id },
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Catch Error", error });
  }
};

exports.getReqUser = async (req, res) => {
  try {
    if (req.user.roleType != "Admin") {
      return res.json({ message: "Not authorized Account" });
    }

    const requests = await databaseConnection.query(
      `SELECT * FROM request INNER JOIN users ON request.userId = users.id INNER JOIN medicine ON medicine.id = request.medicineId WHERE userId = ${req.params.userId}`
    );

    requests.forEach((request) => {
      delete request.password;
      request.user = {
        email: request.email,
        phone: request.phone,
        status: request.status,
        roleType: request.roleType,
      };
      delete request.email;
      delete request.phone;
      delete request.status;
      delete request.roleType;

      request.medicine = {
        name: request.name,
        description: request.description,
        price: request.price,
        expireDate: request.expireDate,
        categoryId: request.categoryId,
      };

      delete request.name;
      delete request.description;
      delete request.price;
      delete request.expireDate;
      delete request.categoryId;
    });

    return res.json({ message: "Done", requests });
  } catch (error) {
    return res.json({ message: "Catch Error", error });
  }
};

exports.getReqAllUser = async (req, res) => {
  try {
    if (req.user.roleType != "Admin") {
      return res.json({ message: "Not authorized Account" });
    }

    const requests = await databaseConnection.query(
      `SELECT * FROM request INNER JOIN users ON request.userId = users.id INNER JOIN medicine ON medicine.id = request.medicineId;`
    );

    requests.forEach((request) => {
      delete request.password;
      request.user = {
        email: request.email,
        phone: request.phone,
        status: request.status,
        roleType: request.roleType,
      };
      delete request.email;
      delete request.phone;
      delete request.status;
      delete request.roleType;

      request.medicine = {
        name: request.name,
        description: request.description,
        price: request.price,
        expireDate: request.expireDate,
        categoryId: request.categoryId,
      };

      delete request.name;
      delete request.description;
      delete request.price;
      delete request.expireDate;
      delete request.categoryId;
    });

    return res.json({ message: "Done", requests });
  } catch (error) {
    return res.json({ message: "Catch Error", error });
  }
};
