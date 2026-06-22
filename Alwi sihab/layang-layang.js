const prompt = require('prompt-sync')({sigint: true});
let diagonal1 = Number(prompt('Masukan diagonal : '))
let diagonal2 = Number(prompt('Masukan diagonal : '))

let luas = 0.5 * diagonal1 * diagonal2
let keliling = diagonal1 + diagonal2 + (Math.sqrt(Math.pow(diagonal1, 2) + Math.pow(diagonal2, 2)))

console.log('============')
console.log('  H A S I L ')
console.log('------------')

console.log(
    `luas layang\t: ${luas.toFixed(2)} cm
    keliling layang\t: ${keliling.toFixed(2)} cm `)