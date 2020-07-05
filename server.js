const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//parse application json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//panggil routes
const routeArtikel = require('./routers/routeArtikel');
const routeKategori = require('./routers/routeKategori');

//routes(app);
app.use('/artikel', routeArtikel);
app.use('/kategori', routeKategori);

//daftarkan menu routes dari index
app.use('/auth', require('./middleware'));
app.use('/', (req,res)=>{
    res.json("Manislor");
});


app.listen(5000, () => {
    console.log(`Server started on port`);
});