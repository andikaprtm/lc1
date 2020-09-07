/*
==================
PETERNAKAN STARDOO
==================

Peternakan Stardoo memiliki 3 jenis hewan: ayam, domba, dan sapi. Tiap jenis hewan bisa berjenis kelamin jantan maupun betina dan memiliki karakteristik yang berbeda-beda.

Karakteristik domba:
1. Domba jantan menghasilkan 0.1 kg wol setiap harinya.
2. Domba betina menghasilkan 0.15 kg wol setiap harinya.

Karakteristik sapi:
1. Sapi jantan beratnya naik 0.5 kg setiap harinya.
2. Sapi betina menghasilkan 20 liter susu setiap hari.

Karakteristik ayam:
1. Ayam jantan beratnya naik 0.2 kg setiap harinya.
2. Ayam betina bertelur setiap 2 hari sekali.

Tugasmu adalah untuk menampilkan hasil sesuai dengan karakteristik tiap-tiap hewan berdasarkan jenis kelamin dan berapa hari yang telah berlalu.

--------
CONTOH 1
--------

hewan = 'Domba'
jenisKelamin = 'betina'
hari = 2

OUTPUT:
Domba betina menghasilkan 0.3 kg wol setelah 2 hari

--------
CONTOH 2
--------

hewan = 'Sapi'
jenisKelamin = 'jantan'
hari = 4

OUTPUT:
Sapi jantan beratnya naik 2 kg setelah 4 hari


--------
CONTOH 3
--------

hewan = 'Sapi'
jenisKelamin = 'betina'
hari = 5

OUTPUT:
Sapi betina menghasilkan 100 liter susu setelah 5 hari

--------
CONTOH 4
--------

hewan = 'Ayam'
jenisKelamin = 'jantan'
hari = 5

OUTPUT:
Ayam jantan beratnya naik 1 kg setelah 5 hari


--------
CONTOH 5
--------

hewan = 'Ayam'
jenisKelamin = 'betina'
hari = 5

OUTPUT:
Ayam betina bertelur sebanyak 2 butir setelah 5 hari


RULE:
- Hanya boleh menggunakan built in function Math

*/

// isi variabel yang tersedia boleh diubah-ubah sesuai kebutuhan

let hewan = 'Ayam'
let jenisKelamin = 'jantan'
let hari = 5

// Tulis code di sini...

 if(hewan == 'Domba'){
    if(jenisKelamin == 'jantan'){
        console.log(`Domba jantan menghasilkan ${0.1*hari} kg wol setelah ${hari} hari.`)
    }else{
        console.log(`Domba betina menghasilkan ${0.15*hari} kg wol setelah ${hari} hari`)
    }
 }else if(hewan == 'Sapi'){
     if(jenisKelamin == 'jantan'){
         console.log(`Sapi jantan beratnya naik ${0.5*hari} kg setelah ${hari} hari`)
     }else{
         console.log(`Sapi betina menghasilkan ${20*hari} liter susu setiap ${hari} hari`)
     }
 }else if(hewan == 'Ayam'){
     if(jenisKelamin == 'jantan'){
         console.log(`Ayam jantan beratnya naik ${0.2*hari} kg setiap ${hari} hari`)
     }else{
         console.log(`Ayam betina bertelur ${Math.floor/2}setiap ${hari} hari sekali.`)
     }
 }
