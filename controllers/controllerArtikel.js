"use strict";

var response = require('./res');
var connection = require('../models/koneksi');


//menampilkan semua data artikel
exports.getsArtikel = function (req, res) {
  connection.query("SELECT * FROM artikel", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

//menampilkan data artikel berdasarkan id
exports.getArtikel = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM artikel WHERE id_artikel = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//menambhakan data artikel
exports.createArtikel = function (req, res) {
  //var id = req.body.id;
  var artikel = req.body.artikel;

  connection.query(
    "INSERT INTO artikel (nama_artikel) VALUES (?)",
    [artikel],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menambahkan artikel", res);
      }
    }
  );
};

//menubah data artikel
exports.editArtikel = function (req, res) {
  var id = req.body.id;
  var artikel = req.body.artikel;

  connection.query(
    "UPDATE artikel set nama_artikel=? WHERE id_artikel=?",
    [artikel, id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil merubah artikel", res);
      }
    }
  );
};

//menghapus data artikel
exports.deleteArtikel = function (req, res) {
  var id = req.body.id;
  var artikel = req.body.artikel;

  connection.query("DELETE FROM artikel WHERE id_artikel=?", [id], function (
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil menghapus artikel", res);
    }
  });
};


