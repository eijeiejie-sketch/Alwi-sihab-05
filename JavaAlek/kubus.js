const prompt = require('prompt-sync')({sigint: true});
let sisi = Number(prompt('Masukan sisi : '))

let luas = Math.pow(sisi, 3)
let keliling = 6 * Math.pow(sisi, 2)

console.log('===============')
console.log('   H A S I L   ')
console.log('---------------')

console.log(
    `luas kubus\t: ${luas.toFixed(2)}
    keliling kubus\t: ${keliling.toFixed(2)}`)  