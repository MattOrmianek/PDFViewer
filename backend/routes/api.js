const express = require('express');
const router = express.Router();
const { uploadPdf } = require('../actions/fileActions');

router.post('/upload', uploadPdf);

module.exports = router;
