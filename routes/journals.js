const express = require('express');
const router = express.Router();
const journalsController = require("../controllers/journalsController")

router.post("/", journalsController.handleNewJournal);

module.exports = router;