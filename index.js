/**
 * SOAL NO. 11
 */


/**
 * Diberikan 2 function:
 * meleeRangedGrouping yang menerima 1 parameter berupa string. 
 * Implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta. 
 * Format string yang diberikan adalah <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ... 
 * sedangkan output yang diharapkan adalah [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]. 
 * Jika input adalah string kosong ('') maka return array kosong
 * Untuk memisahkan nama hero dan tipenya, implementasikan function splitting 
 * yang telah diberikan dimana hasil dari function tersebut adalah array satu dimensi. 
 * Jika input yang diberikan adalah 'QOP-Ranged,Anti Mage-Melee' maka output yang diharapkan adalah ['QOP-Ranged', 'Anti Mage-Melee']
 */


function splitting(str) {
    //your code here
    if (str === '') {
        return [];
    }

    let hero = str.split(',');
    let heroRanged = hero.filter(e => {
        return e.split('-')[1] === 'Ranged';
    })
    let heroMelee = hero.filter(e => {
        return e.split("-")[1] === 'Melee';
    })
    let temp = [];
    heroRanged = heroRanged.map(e => {
        return e.split("-")[0];
    })
    heroMelee = heroMelee.map(e => {
        return e.split("-")[0];
    })
    temp.push(heroRanged, heroMelee);
    return temp;
}

function meleeRangedGrouping(str) {
    //your code here
    return splitting(str);
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []


/**
 * SOAL NO. 12
 */


/**
 * Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari angka-angka yang terdapat di dalam array
 */


function deepSum(arr) {
    // write your code here
    if (arr.length === 0) return "No Number";
    let total = 0;
    arr.forEach(e1 => {
        e1.forEach(e2 => {
            e2.forEach(e3 => {
                total += e3;
            })
        })
    })
    return total;
}

console.log(
        deepSum([
            [
                [4, 5, 6],
                [9, 1, 2, 10],
                [9, 4, 3]
            ],
            [
                [4, 14, 31],
                [9, 10, 18, 12, 20],
                [1, 4, 90]
            ],
            [
                [2, 5, 10],
                [3, 4, 5],
                [2, 4, 5, 10]
            ]
        ])
    ) // 316

console.log(
        deepSum([
            [
                [20, 10],
                [15],
                [1, 1]
            ],
            [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                [2],
                [9, 11]
            ],
            [
                [3, 5, 1],
                [1, 5, 3],
                [1]
            ],
            [
                [2]
            ]
        ])
    ) // 156

console.log(deepSum([])) // No number

console.log(
    deepSum([
        [
            [20, 10],
            [15],
            [1, 1]
        ],
        [
            [1, 2, 3, 9, 10, 11],
            [2],
            [9, 11]
        ],
        [
            [2]
        ]
    ])
)



/**
 * SOAL NO. 13
 */


/**
 * Diberikan sebuah function slice yang dapat menerima 3 paramter yaitu data (mandatory) dengan tipe
 * Array, start (optional) dengan tipe integer dan end (optional) dengan tipe integer.
 */


function slice(data, start, end) {
    // your code here
    if (start > data.length) return [];
    let startSl = start || 0;
    let endSl = end || data.length;
    return data.slice(start, endSl);
}

console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2)) // [ 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)) // [ 'camel', 'duck' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 1, 5)) // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'])) //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)) //[]


/**
 * SOAL NO. 14
 */


/**
 * Lengkapi function berikut di mana function berikut mengembalikan hasil penjumlahan terbesar dari dua elemen di dalam array
 */


function biggestSum(array) {
    let total = array[0];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] > total) {
                total = array[i] + array[j];
            }
        }
    }
    return total;
}


console.log(biggestSum([10, 4, 90, 7, 73, 2, 10])) // expected output: 163
console.log(biggestSum([1, 0, 9, 2, 4])) // expected output: 13
console.log(biggestSum([9])) // expected output: 9


/**
 * SOAL NO. 15
 */

/**
 * Function flippingMatrix menerima sebuah array 2 dimensi di mana jumlah kolom = jumlah baris.
 * Lengkapi function flippingMatrix di mana function tersebut berfungsi untuk membalik salah satu baris,
 * dari array 2 dimensi, di mana baris tersebut memiliki hasil penjumlahan elemen-elemen terbesar
 */


function flippingMatrix(array) {
    let total = 0;
    let temp;
    let k;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            temp += array[i][j];
            if (temp > total) {
                total = temp;
                k = i;
            }
        }
        temp = 0;
    }
    let l = 0;
    let copyArray = JSON.parse(JSON.stringify(array));
    for (let i = 0; i < array.length; i++) {
        for (let j = array.length - 1; j >= 0; j--) {
            if (k === i) {
                copyArray[i][l] = array[i][j];
                ++l;
            }
        }
    }
    return copyArray;
}


console.log(flippingMatrix(
    [
        [1, 2],
        [3, 4]
    ]
))

// expected output:
// [
//   [1, 2],
//   [4, 3]
// ]
// Penjelasan: yang dibalik adalah baris kedua, karena penjumlahan elemen-elemen dari baris kedua menghasilkan jumlah terbesar ((3 + 4) > (1 + 2))


console.log(flippingMatrix(
    [
        [3, 0, 9],
        [10, 7, 3],
        [9, 4, 1]
    ]
))

// expected output
// [
//   [3, 0, 9],
//   [3, 7, 10],
//   [9, 4, 1]
// ]