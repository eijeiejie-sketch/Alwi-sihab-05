const prompt = require('prompt-sync')({sigint: true});
let jari = Number(prompt('Masukan Jari-Jari : '))
let tinggi = Number(prompt('Masukan tinggi : '))

let volume = 3.14 * Math.pow(jari, 2) * tinggi
let Luasp = 2 * 3.14 * jari * (jari + tinggi)

console.log('===============')
console.log('   H A S I L   ')
console.log('---------------')

console.log(`volume tabung\t: ${volume.toFixed(2)} cm `)
console.log(`Luasp tabung\t: ${Luasp.toFixed(2)} cm`)