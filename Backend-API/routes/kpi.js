const express = require('express');
const router = express.Router();
const KPIController = require('../controllers/kpi');

router.get('',KPIController.get);

module.exports = router;
