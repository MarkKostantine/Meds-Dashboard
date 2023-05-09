const { Router } = require("express");
const userController = require("../user/controller/user");
const auth = require("../../middleware/auth.js");

const router = Router();

router.get("/", auth, userController.getAlluser); // get all user token is required (page admin)
router.post("/request", auth, userController.createRequest);
router.patch("/:reqId/waiting", auth, userController.adminResponseForRequest);
router.get("/request/admin", auth, userController.getReqAllUser); // get all user token is required (page admin)
router.get("/request/:userId", auth, userController.getReqUser);

router.put("/:userId/update", auth, userController.updateUser); // update user (Admin)
router.delete("/:userId/delete", auth, userController.deleteUser); // delete user (Admin)

module.exports = router;
