const express = require('express')
const router =express.Router()
let {people} = require('./json')
router.get('/',(req,res)=>{
res.send('new user')
})
router.get('/:userid',(req,res)=>{
    const param= req.params
    let newarray = people.find(l=>{
       return l.id===Number(param.userid)
    })
    res.status(200).json({success:true,data:newarray})
    console.log(param)
})
module.exports=router