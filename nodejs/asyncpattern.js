const {readFile,writeFile} = require('fs')
const util= require('util')
const readpromise = util.promisify(readFile)
const writfilepromise = util.promisify(writeFile)

const gettext= (path)=>{
return new Promise((resolve,reject)=>{
    readFile(path,'utf-8',(err,res)=>{
        if(err){
            reject(err)
        }
        else{
            resolve(res)
        }
    })
})
}

const copyfile = async ()=>{
    try{
    const first = await readpromise('./content/subfolder/test.txt','utf-8')
    const writeFile= await writfilepromise('./content/subfolder/new.txt',first,{flag:'a'})
    console.log(first)
    console.log(writeFile)
    
}
catch(err){
    console.log(err)
}
}
copyfile()
let c = [12,2,3,2]
console.log(c)