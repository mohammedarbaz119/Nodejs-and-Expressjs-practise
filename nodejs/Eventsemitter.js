const Eventemitter = require('events');
const custonemit = new Eventemitter();
custonemit.on('response',(name,id)=>{
    console.log('data received ' +`${name} and id is ${id}`)
})
custonemit.on('response',()=>{
    console.log("new response")
})
custonemit.emit('response','arbaz',23)// arbaz and id is 23
// const http = require('http')
// const server =http.createServer()
// server.on('request',(req,res)=>{
//     if(req.url==='/'){
// res.end('console.log')
//     }
//     else{
//         res.end('sdeefwe')
//     }
// })

// server.listen(8081)
