const express = require('express')
const app = express()
const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    let date = new Date().getFullYear()
    console.log({method,url,date})
    next()

}
app.use(logger)

app.get('/',logger,(req,res)=>{
    const method=req.method
    console.log(method)
    res.send("hello wolrd")
})
app.get('/users',(req,res)=>{
    res.send('new user')
})
const newRouter = require('./userrouter')
app.use('/new',newRouter)
app.listen(4000,()=>{
    console.log("new")
}) 