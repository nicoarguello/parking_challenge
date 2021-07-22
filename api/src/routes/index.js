const { Router } = require("express");

const search = require("./search");
const router = Router();

router.use("/", search);
// router.use("/", actividad);

module.exports = router;