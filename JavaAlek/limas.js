const prompt = require('prompt-sync')({sigint: true});
let Lalas = Number(prompt('Masukan alas : '))
let tinggi = Number(prompt('Masukan tinggi : '))
let sclubung = Number(prompt('Masukan sclubung : '))

let Volume = 1/3 * Lalas * tinggi
let Luasp = Lalas * sclubung

console.log('===============')
console.log('   H A S I L   ')
console.log('---------------')

console.log(
    `Volume limas\t: ${Volume.toFixed(2)} cm
    Lalas limas\t: ${Lalas.toFixed(2)} cm `)