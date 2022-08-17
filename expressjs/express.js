const {readFileSync} = require('fs')
const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.resolve(__dirname,'public')))
// app.get('/',(req,res)=>{
//     res.status(200).sendfile('./expressjs/public/wc1.html')
// })

app.all('*',(req,res)=>{
    res.status(404).send('<h1>not found</h1>')
})

app.listen(2030,()=>{
    console.log("ujje")
})
// let patha = path.resolve(__dirname,'public')
// console.log(patha)