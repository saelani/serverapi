"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API ku berjalan", res);
};


//menampilkan semua data kategori
exports.getsKategori = function(req,res){
    connection.query('SELECT * FROM kategori', function(error,rows,fileds){
        if(error){
            console.log(error);
        } else {
            response.ok(rows,res)
        }
    });
};