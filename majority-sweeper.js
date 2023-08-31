/**
 * 3. [INSTRUCTIONS]
MajoritySweeper adalah function yang dibuat untuk mengeliminasi nilai array yang 
sering muncul (mayoritas) dari daftar nilai array 

[EXAMPLE]
INPUT: [9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5]
OUTPUT: [9, 3, 3, 4, 2, 5, 5, 5]

INPUT: [22, 22, 100, 100, 100, 2000]
OUTPUT: [22, 22, 2000]

INPUT: [2, 2]
OUTPUT: []

INPUT:[4, 4, 4, 1, 1, 1, 2, 2]
jika nilai minoritas/mayoritas sama, maka nilai yang digunakan yang pertama
OUTPUT: [1, 1, 1, 2, 2]


 */


function MajoritySweeper(arr) {
    const frekuensi = {};
    let mayoritas = 0;

    for (let i = 0; i < arr.length; i++) {
        const index = arr[i];
        //jika nilai index tidak ada di objek frekuensi maka return 1
        if (!frekuensi[index]) {
            frekuensi[index] = 1;
        } else {
            frekuensi[index]++;//jika sudah ada tambah 1 kedalam frekuensi yang sudah ada
        }

        // memeriksa frekuensi[index] jika lebih besar dari frekuensi mayoritas yang ada
        // Jika ya, nilai mayoritas dirubah
        if (mayoritas === 0 || frekuensi[index] > frekuensi[mayoritas]) {
            mayoritas = index;
        }
    }

    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== mayoritas) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])); // Output: [9, 3, 3, 4, 2]
console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])); // Output: [22, 22, 2000]
console.log(MajoritySweeper([2, 2])); // Output: []
console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])); // Output: [1, 1, 1, 2, 2]

//create function MajoritySweeper
//create 
//menghitung frekuensi masing" angka
