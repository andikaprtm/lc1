/*
======================
Menggambar di Terminal
======================
Hari ini kita menggambar pohon di terminal seperti contoh di bawah.
Tampilkan x ke samping di baris ganjil, dan o di baris genap.
Tinggi pohon sesuai input yang diberikan

Contoh 1
--------
input = 3

output:
x
oo
xxx

Contoh 2
--------
input = 6

output:
x
oo
xxx
oooo
xxxxx
oooooo


RULES:
- DILARANG MENGGUNAKAN built in function apapun.

*/

let input = 5
for(let i=0; i<=5;i++){
    let result = ''
    for(let j=0; j<=i; j++){
        if(i%2 == 0){
            result+= 'o'
        }else{
            result+= 'x'
        }
    }
    console.log(result)
}