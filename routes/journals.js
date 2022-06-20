const express = require('express');
const router = express.Router();

router.post("/journals", journalsController.handleNewJournal);

module.exports = router;