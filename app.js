// const a = 20
// console.log(a)
const { a: ad, ...cd } = require("./modules")

const { calcmax, ...person } = require('./functionsimports')
calcmax(cd.arr)
cd.sayhi(ad)
console.log(ad)
console.log(ad, cd)
console.log(person.persona)
console.log(person.arbaz)
require('./newfile')
console.log(2+2)


