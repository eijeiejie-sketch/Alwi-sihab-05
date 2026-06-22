const prompt = require('prompt-sync')({insigt: true})
let Lalas = Number(prompt('Masukan alas : '))
let tinggi = Number(prompt('Masukan tinggi : '))
let Kalas = Number(prompt('Masukan K alas : '))

let Volume = Lalas * tinggi
let luasP = 2 * (Lalas + Kalas) * tinggi

console.log('===============')
console.log('   H A S I L   ')
console.log('---------------')

console.log(
    `Volume prisma\t: ${Volume.toFixed(2)} cm
    luasP prisma\t: ${luasP.toFixed(2)} cm`)