const express = require('express');
const router = express.Router();
const reviewsTrendController = require('../controllers/reviewsTrend');

router.get('',reviewsTrendController.get);
module.exports = router;
