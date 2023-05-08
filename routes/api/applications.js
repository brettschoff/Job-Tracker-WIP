const express = require("express");
const router = express.Router();
const applicationsCtrl = require('../../controllers/applications')

router.get('/', applicationsCtrl.index)

module.exports = router;