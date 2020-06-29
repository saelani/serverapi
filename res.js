'use strict';

exports.ok = function(values, res){
    var data = {
        'status' : 200,
        'values' : values
    };
     res.json(data);
     res.end();
};

exports.okcoba = function(values,res){
    var bali = [
        { regency:'Jembrana', population:114863 },
        { regency:'Tabanan', population:209308 },
        { regency:'Badung', population:277536 },
        { regency:'Gianyar', population:208443 },
        { regency:'Klungkung', population:79233 },
        { regency:'Bangli', population:106166 },
        { regency:'Karangasem', population:193787 },
        { regency:'Buleleng', population:294418 },
        { regency:'Denpasar', population:403292 }
    ];
    
    var sum = bali.reduce(function(val, element) {
        return val + element.population;
    }, 0);

    //lakukan akumulasi
    const hasil = values.reduce( function (akumulasi,item) {
        //Tentukan key group
        if(akumulasi[item.id_kategori]){
            //buat variabel group id_kategori
            const group = akumulasi[item.id_kategori];
            //cek jika isi aray adalah id_kategori
            if(Array.isArray(group.artikel)){
                //tambahkan value ke dalam group
                group.artikel.push(item.artikel)
            } else {
                group.artikel = [group.artikel, item.artikel]
            }
        } else {
            akumulasi[item.id_kategori] = item;
        };
        return akumulasi;
    }, {});

    var data = {
        'status': 200,
        'values': values
    };
     res.json(data);
     res.end();
};

//response untuk nested matakuliah
exports.oknested = function(values, res){
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item)=>{
        //tentukan key group
        if(akumulasikan[item.nama]){
            //buat variabel group nama mahasiswa
            const group = akumulasikan[item.nama];
            //cek jika isi array adalah matakuliah
            if(Array.isArray(group.matakuliah)){
                //tambahkan value ke dalam group matakuliah
                group.matakuliah.push(item.matakuliah);
            }else {
                group.matakuliah = [group.matakuliah, item.matakuliah];
            }
        }else {
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status':200,
        'values':hasil
    };
    
     res.json(data);
     res.end();

}