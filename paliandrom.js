/**
 *[INSTRUCTION]
Buatlah sebuah function yang menerima sebuah parameter berupa string.
function akan membalikan urutan per karakter dari karakter pertama hingga terakhir.
 
[EXAMPLE]

input: string: 'Semangat Ngoding', 
proses: setiap karakter dan kata, akan diberdasarkan urutan kebalikannya
output: gnidogN tagnameS
*/

function balikKata(string){
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        newString = string[i] + newString;  
    }
    return newString;
}


console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

//buat function balik kata dengan parameter string
//buat variabel kosong untuk menampung string
//perulangan sepanjang string
//menambahkan karakter string[i] hasil perulangan di depan newstring
//setelah perulangan selesai dikembalikan nilai newString menjadi hasil akhir