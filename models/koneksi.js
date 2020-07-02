var mysql = require('mysql');

//buat koneksi database

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'db_school'
});

conn.connect((err)=>{
    if (err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;