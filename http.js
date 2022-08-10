const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('wlecome to pcuhi')
    }
    else if (req.url === '/new') {


        res.end("hello this is all new node lesson")
    }
    else {
        res.end(`<h1>oops sorry</h1>
    <a href="/">home page</a>
    `)

    }
})
server.listen(8081)