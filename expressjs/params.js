const express = require('express')
const app = express()
const {products,people}= require('./json')
app.get('/',(req,res)=>{
    res.send('<h1>home page</h1><a href="/products">products</a><hr/><a href ="/people">people</a>')
})
app.get('/products/:id',(req,res)=>{
    const reqparam = req.params
    console.log(reqparam)
    const newarray = products.find(l=>{
        return Number(reqparam.id)===l.id
    })
    if(!newarray){
        return res.status(404).send('<h1>not found</h1>')
    }
    res.json(newarray)
})
app.get('/products/search/query',(req,res)=>{
    const {search,sort,limit} = req.query
    console.log(req.query)
    if(search){
        let searchpro = products.filter(l=>{
            return l.name.startsWith(search)
        })
        if(sort){
            searchpro.sort((a,b)=>{
               return a.sort-b.sort
            })
           
        }
        if(limit){
         searchpro= searchpro.slice(0,Number(limit))
        }
 
      if(searchpro.length==0){
        res.status(404).send('<h1>not found</h1>')
      }
      else{
        res.json(searchpro)
      }
    }
    else{
        res.status(404).send('<h1>not found</h1>')
    }
    
})

app.listen(4000,()=>{
    console.log('listening..')
})