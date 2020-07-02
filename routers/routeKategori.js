"use strict";

module.exports = function (app) {
  var kategori = require('../controllers/controllerKategori');

  app.route("/").get(kategori.index);
  app.route('/kategori').get(kategori.getsKategori);
  app.route('/kategori/:id').get(kategori.getKategori);
  app.route('/kategori').post(kategori.createKategori);
  app.route('/kategori').put(kategori.editKategori);
  app.route('/kategori').delete(kategori.deleteKategori);
  //app.route('/tampilgroup').get(jsonku.getsGroupKategori);
  app.route('/tampilmatakuliah')
        .get(kategori.tampilgroupmatakuliah);
};
