const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/notes');

router.get('/application/:id/notes', notesCtrl.show)
router.post('/application/:id/notes', notesCtrl.create)
router.delete('/notes/:id', notesCtrl.delete)
module.exports = router;