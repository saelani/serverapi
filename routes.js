"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);
  app.route('/kategori').get(jsonku.getsKategori);
  app.route('/kategori/:id').get(jsonku.getKategori);
  app.route('/kategori').post(jsonku.createKategori);
  app.route('/kategori').put(jsonku.editKategori);
  app.route('/kategori').delete(jsonku.deleteKategori);
};
