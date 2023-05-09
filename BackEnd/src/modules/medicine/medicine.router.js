const { Router } = require("express");
const medicineController = require("../medicine/controller/medicine.js");
const auth = require("../../middleware/auth.js");

const router = Router();

router.get("/", medicineController.getAllMedicine); // get all medicine token is required (page admin)

// create Medicine token is required
router.post("/", auth, medicineController.createMedicine);

// update Medicinee token is required
router.patch("/:medicineId", auth, medicineController.updateMedicine);

// delete Medicinee token is required
router.delete("/:medicineId/delete", auth, medicineController.deleteMedicine);

module.exports = router;
