const express = require("express");
const { uploadEmbargo, createEmbargo, getEmbargos } = require("../controllers/embargoController.js");

const router = express.Router();

router.post('/upload', uploadEmbargo );
router.post("/create-embargo", createEmbargo);
router.get("/get-embargos", getEmbargos)
module.exports = router