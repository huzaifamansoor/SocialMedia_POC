const express = require('express');
const router = express.Router();
const smxDashboardController = require('../controllers/smxdashboard');

router.get('/kpi',smxDashboardController.getKPI);
// router.get('/feed',smxFeedController.getFeed);
module.exports = router;
