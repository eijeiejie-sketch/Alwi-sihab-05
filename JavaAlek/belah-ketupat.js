const prompt = require('prompt-sync')({sigint: true});
let sisi = Number(prompt('masukan sisi : '))
let diagonal1 = Number(prompt('Masukan diagonal : '))
let diagonal2 = Number(prompt('Masukan diagonal : '))

let luas = 0.5 * diagonal1 * diagonal2
let keliling = 4 * sisi

console.log('================')
console.log('   H A S I L    ')
console.log('----------------')

console.log(
    `luas ketupat\t: ${luas.toFixed(2)} cm
    keliling ketupat\t: ${keliling.toFixed(2)} cm`)
