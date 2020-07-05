var express = require("express");
var router = express.Router();
var artikel = require("../controllers/controllerArtikel");

router.get("/artikel", artikel.getsArtikel);
router.get("/artikel/:id", artikel.getArtikel);
router.post("/artikel", artikel.createArtikel);
router.put("/artikel", artikel.editArtikel);
router.delete("/artikel", artikel.deleteArtikel);

module.exports = router;
