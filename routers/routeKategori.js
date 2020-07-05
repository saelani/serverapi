const express = require('express');
const router = express.Router();
const kategori = require('../controllers/controllerKategori');

router.get('/', kategori.index);
router.get('/kategori', kategori.getsKategori);
router.get('/kategori/:id', kategori.getKategori);
router.post('/kategori', kategori.createKategori);
router.put('/kategori', kategori.editKategori);
router.delete('/kategori', kategori.deleteKategori);

module.exports = router;
