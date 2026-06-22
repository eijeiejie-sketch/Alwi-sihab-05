const prompt = require('prompt-sync')({sigint: true});
let jari = Number(prompt('Masukan Jari-Jari : '))
let tinggi = Number (prompt('Masukan Tinggi : '))

let volume = 1/3 * 3.14 * (jari ^ 2) * tinggi
let s = (jari ^ 2) + (tinggi ^ 2)
let LuasP = 3.14 * jari * (jari + s)

console.log('===============')
console.log('   H A S I L   ')
console.log('---------------')

console.log(`Volume kerucut\t: ${volume.toFixed(2)}`)
console.log(`Luas permukaan\t: ${LuasP.toFixed(2)}`)
