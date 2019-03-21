const express = require('express');
const router = express.Router();
const topBottomPerformerController = require('../controllers/topBottomPerformer');

router.get('/top',topBottomPerformerController.getTopPerformer);
router.get('/bottom',topBottomPerformerController.getBottomPerformer);

module.exports = router;
