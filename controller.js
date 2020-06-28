"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan", res);
};

//menampilkan semua data kategori
exports.getsKategori = function (req, res) {
  connection.query("SELECT * FROM kategori", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

//menampilkan data kategori berdasarkan id
exports.getKategori = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM kategori WHERE id_kategori = ?",
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

//menambhakan data kategori
exports.createKategori = function (req, res) {
  //var id = req.body.id;
  var kategori = req.body.kategori;

  connection.query(
    "INSERT INTO kategori (nama_kategori) VALUES (?)",
    [kategori],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menambahkan kategori", res);
      }
    }
  );
};
