const prompt = require('prompt-sync')({sigint: true});
let jari = Number(prompt('Masukan Jari-Jari : '))

let volume = (4/3) * 3.14 * jari ^ 3
let LuasP = 4 * 3.14 * jari ^ 2

console.log('===============')
console.log('   H A S I L   ')
console.log('---------------')

console.log(`volume bola\t: ${volume.toFixed(2)}`)
console.log(`Luas Permukaan bola\t: ${LuasP.toFixed(2)}`)
