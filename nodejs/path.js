const path = require('path')
const filepath = path.join('/content', 'subfolder', 'test.txt')
console.log(filepath)
let base = path.basename(filepath)
console.log(base)
let s = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(s)
console.log(__dirname)
console.log(__filename)
