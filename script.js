var penumpang = [];
var  tambahPenumpang = function(namaPenumpang, penumpang) {
    // Jika Angkot Kosong
    if( penumpang.length == 0 ) {
    //  tambah penumpang di awal array

    penumpang.push(namaPenumpang);

    // kembalikan isi array dan keluar dari function
    return penumpang;
}else{
    //  telusuri seluruh kursi dari awal
    for ( var i = 0; i < penumpang.length; i++) { 
    // jika ada kursi kosong
    if ( penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
         penumpang[i] = namaPenumpang;
    //  kembalikan isi array dan keluar dari function
    return penumpang;
    }
    // Jika sudah ada nama yang sama
        else if  (penumpang [i] == namaPenumpang) { 
        // tampilkan pesan kesalahannya
        console.log (namaPenumpang + 'Penumpang sudah ada di kereta.')
        // kembalikan isi array dan keluar dari function
        return penumpang;
    }


    // Jika seluruh kursi terisi 
    else if (i == penumpang.length -1 ){
    // tambah penumpang di akhir array
    penumpang.push(namaPenumpang); 
    //  kembalikan isi array  dan keluar dari function
    return penumpang;
    }
    }

}
}


var hapusPenumpang = function(namaPenumpang, penumpang) {
    if(penumpang.length == 0 ){
        console.log ('Angkot Masih Kosong.');
        return penumpang;
    }else{
        for (var i = 0; i < penumpang.lenght; i++ ) {
            if (penumpang [i] ==  namaPenumpang ) {
                penumpang[i] = undefined;
                return penumpang;
            } else if ( i == penumpang.length - 1){
                console.log(namaPenumpang + 'Tidak ada di dalam Kereta ')
                return penumpang;
            }
        }
    }
}