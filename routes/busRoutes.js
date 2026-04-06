const express = require('express');
const router = express.Router();
const busController = require("../controllers/busController")


router.get("/available/:seats",busController.getAvailableSeats);

router.post("/",busController.addBus);


module.exports= router;