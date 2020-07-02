var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi')

router.post('/api/vi/register', auth.registrasi);
router.post('/api/vi/login', auth.login);

//alamat yang perlu verifikasi
router.get('/api/v1/rahasia', verifikasi(), auth.halamanrahasia);

module.exports = router;