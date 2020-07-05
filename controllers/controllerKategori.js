const controller = {};

const response = require('./res');
const connection = require('../models/koneksi');

controller.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan", res);
};

//menampilkan semua data kategori
controller.getsKategori = function (req, res) {
  connection.query("SELECT * FROM kategori", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

//menampilkan data kategori berdasarkan id
controller.getKategori = function (req, res) {
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
controller.createKategori = function (req, res) {
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

//menubah data kategori
controller.editKategori = function (req, res) {
  var id = req.body.id;
  var kategori = req.body.kategori;

  connection.query(
    "UPDATE kategori set nama_kategori=? WHERE id_kategori=?",
    [kategori, id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil merubah kategori", res);
      }
    }
  );
};

//menghapus data kategori
controller.deleteKategori = function (req, res) {
  var id = req.body.id;
  var kategori = req.body.kategori;

  connection.query("DELETE FROM kategori WHERE id_kategori=?", [id], function (
    error,
    rows,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      response.ok("Berhasil menghapus kategori", res);
    }
  });
};

//nested djson
controller.getsGroupKategori = function (req, res) {
  connection.query(
    "SELECT kategori.id_kategori, artikel.judul, artikel.penulis FROM kategori JOIN artikel WHERE artikel.id_kategori = kategori.id_kategori ORDER BY kategori.id_kategori",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.oknested("Berhasil", res);
      }
    }
  );
};

//menampilkan matakuliah group
controller.tampilgroupmatakuliah = function(req, res){
  connection.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks from krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa',
      function (error, rows, fields){
          if(error){
              console.log(error);
          }else {
              response.oknested(rows, res);
          }
      }
  )

}

module.exports = controller;
