const express = require("express");
const router = express.Router();
const controller_institute = require("../controller/institute-controller");

router.get("/types", controller_institute.getInstitute);
router.post("/create", controller_institute.registerinstitute);

module.exports = router;
