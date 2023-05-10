const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/notes');

router.get('/application/:id/notes', notesCtrl.show)

module.exports = router;