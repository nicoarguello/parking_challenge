const { Router } = require("express");
const { prueba } = require("../controllers/controllers");
const router = Router();

router.get("/", prueba);

module.exports = router;