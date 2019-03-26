const express = require('express');
const router = express.Router();
const smxFeedController = require('../controllers/smxfeed');

router.get('/kpi',smxFeedController.getKPI);
router.get('/feed',smxFeedController.getFeed);
module.exports = router;
