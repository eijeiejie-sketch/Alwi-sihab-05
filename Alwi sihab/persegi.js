const prompt = require("prompt-sync")({sigint: true});
let sisi = Number(prompt('masukan sisi : '))

let luas = sisi ^ 2
let keliling = 4 * sisi
console.log('=====================')
console.log('      H A S I L      ')
console.log('---------------------')

console.log(
    `luas persegi\t\t: ${luas.toFixed(2) } cm
     luas persegi\t: ${keliling.toFixed(2)} cm `)
