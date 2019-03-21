const express = require('express');
const router = express.Router();
const reviewListController = require('../controllers/reviewList');

router.get('',reviewListController.get);

module.exports = router;
