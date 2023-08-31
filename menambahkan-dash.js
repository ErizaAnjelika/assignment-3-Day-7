/**
 * [INSTRUCTION]
Buatlah sebuah function yang menerima sebuah parameter berupa string dan number.
function akan memberikan dash (-) jumlah karakter yang ada di number.
functin tidak akan menambahkan dash (-) jika tidak ada karakter yang tersisa.

[EXAMPLE]
input: string: 'Semangat'!, number: 3
proses: setiap 3 karakter, akan ditambahkan dash
output: Sem-ang-at!
 * 
 */

function dashWord(string, number){
    let newString = "";//variabel untuk menyimpan proses hasil

    for (let i = 0; i < string.length ; i++) {
        
        newString += string[i];//setiap iterasi 'i' dari string ditambahkan ke dalam 'new string'

        if ((i + 1) % number === 0 && i !== string.length -1) {
            newString = newString + "-";//newString ditambahkan dash, setelah proses percabangan terpenuh i
        }
    }
    return newString;
}
console.log(dashWord('Semangat!', 3)) // Sem-ang-at!
console.log(dashWord('Uzumaki Naruto', 2)) // Uz-um-ak-i -Na-ru-to
console.log(dashWord('081234567890', 4)) // 0812-3456-7890
console.log(dashWord('Indonesia Hebat', 10)) // Indonesia -Hebat
console.log(dashWord('Love Coding', 1)) // L-o-v-e- -C-o-d-i-n-g

//logika program
//buat function dashWord
//create variabel newString kosong untuk menampung 
//perulangan sepanjang string
//variabel newString diisi hasil perulangan indek string[i]
//lakukan pengecekan dengan if
//jika (i + 1) % number === 0, karna index array mulai dari angka 0 maka i ditambahkan 1,
//agar karakter pertama tidak ditambah dash.kemudian memeriksa apakah indeks keipatan dari 'number'
//dan i !== string.length -1, memastikan penambahan dash bukan pada karaktter terakhir string
//kondisi terpenuhi maka dash ditambahkan
//return newString