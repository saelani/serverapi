var express = require('express');
var aut = require('./auth');
var router = express.Router();

router.post('/api/vi/register', aut.registrasi);

module.exports = router;