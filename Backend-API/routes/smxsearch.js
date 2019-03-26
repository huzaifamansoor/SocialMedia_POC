const express = require('express');
const router = express.Router();
const smxSearchController = require('../controllers/smxsearch');

// router.get('/kpi',smxFeedController.getKPI);
router.get('/feed',smxSearchController.getFeed);
module.exports = router;
