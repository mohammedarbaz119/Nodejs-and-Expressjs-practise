const { createReadStream, readFileSync } = require('fs')
const http = require('http')
const homepagehtml = readFileSync('./expressjs/wc1.html')
const homepagecss = readFileSync('./expressjs/wc1.css')
const homepagejs = readFileSync('./expressjs/wc1.js')
const homepagedata = readFileSync('./expressjs/data.js')
const server =http.createServer((req,res)=>{
const url = req.url
if(url==='/pop'){
    res.write(homepagehtml)
    res.end()
}
else if (url ==='/wc1.css'){
    res.write(homepagecss)
    res.end()
}
else if(url === '/wc1.js'){
    res.writeHead(200,{"content-type":"text/javascript"})
    res.write(homepagejs)
    res.end()
}
else if(url==='/data.js'){
    res.writeHead(200,{"content-type":"text/javascript"})
    res.write(homepagedata)
    res.end()
}
else{
    res.end('nooooo')
}

})
server.listen(8085)