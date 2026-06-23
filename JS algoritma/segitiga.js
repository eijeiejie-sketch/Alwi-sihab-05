const prompt = require('prompt-sync')({sigint: true });
let alas = Number(prompt('masukan alas : '))
let tinggi = Number(prompt('masukan tinggi : '))

let luas = 0.5 * alas * tinggi
let keliling = alas + tinggi + alas ^ 2 + tinggi ^ 2

console.log('===============')
console.log('   H A S I L   ')
console.log('---------------')

console.log(
    `luas segitiga\t\t: ${luas.toFixed(2)} cm
    keliling segitiga\t: ${keliling.toFixed(2)} cm `)
