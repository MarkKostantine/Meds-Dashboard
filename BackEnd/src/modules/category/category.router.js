const { Router } = require("express");
const categoryController = require("../category/controller/category.js");
const auth = require("../../middleware/auth.js");

const router = Router();

// get send data in url
//post send more Security
router.get("/", categoryController.getCategory); // get all category ( home page )
router.get("/:categoryId/medicine", categoryController.getMedOfCategory); // get medicine of category  (page medicine)

router.post("/", auth, categoryController.createCategory); // create category token is required
router.patch("/:categoryId/update", auth, categoryController.updateCategory); //upaate category token is required
router.delete("/:categoryId/delete", auth, categoryController.deleteCategory); //delete category token is required

module.exports = router;
