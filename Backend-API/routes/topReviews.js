const express = require('express');
const router = express.Router();
const topReviewsController = require('../controllers/topReviews');

router.get('',topReviewsController.get);

module.exports = router;
