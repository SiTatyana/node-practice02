const express = require("express");
const router = express.Router();
const {getAll, create} = require("../controllers/note");

router.get("/", getAll);
router.post("/:id", create);


module.exports = router;