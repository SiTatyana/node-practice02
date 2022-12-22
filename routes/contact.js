const express = require("express");
const router = express.Router();
const {getAll, create, addNotes} = require("../controllers/contact");

router.get("/", getAll);
router.post("/", create);
router.put("/:id", addNotes);

module.exports = router;