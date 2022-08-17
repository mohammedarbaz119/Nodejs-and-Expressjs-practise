//streams
const {createReadStream, ReadStream,createWriteStream}= require('fs')
const stream = createReadStream('./newd.txt','utf-8')
stream.on('data',(res)=>{
console.log(res)
})
stream.on('error',(e)=>{
    console.log(e)
})
const http = require('http')
http.createServer((req,res)=>{
    const streams = createReadStream('./newd.txt',{highWaterMark:180000,encoding:'utf-8'})
    streams.on('open',(d)=>{
       streams.pipe(res)
    })
    streams.on('error',(e)=>{
res.end(e)
    })
}).listen(8081)