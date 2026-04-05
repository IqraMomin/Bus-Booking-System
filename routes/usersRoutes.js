const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.post("/add",usersController.addEntries);
router.put("/update/:id",usersController.updateEntry);

module.exports = router;