const { readFile, writeFile, copyFile, writeFileSync } = require('fs')
copyFile('./content/subfolder/new.txt', './content/subfolder/test.txt', (err) => {
    if (err) {
        console.log(err)
    }
})
// readFile('./node and express/content/subfolder/new.txt','utf-8',(err,res)=>{
//     console.log(res)
// })
readFile('./content/subfolder/new.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err)

    }
    else{
        console.log(res)
    }
})
for (let i = 0;i< 10000; i++) {
   writeFileSync('./newd.txt',`hello world ${i}\n`,{flag:'a'})
}