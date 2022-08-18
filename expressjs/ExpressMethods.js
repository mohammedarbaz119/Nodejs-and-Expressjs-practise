const express = require('express')
const app = express()
const {people} = require('./json')

const loginarr = ['arbaz']
app.use(express.static('./expressjs/methodspublic'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.post('/login',(req,res)=>{
const newname = req.body.name
if(!people.includes(newname)){
    people.push(newname)
}
console.log(people)
res.send(people)
})
app.get('/users',(req,res)=>{
    res.json({data:people})
})

app.post('/users',(req,res)=>{
    const {name} = req.body

   if(!name){

    return
    res.status(400).json({success:false,no:"provide something"})
  
   }
   people.push({name:name})
  
   res.status(200).json({success:true,data:people})
})
app.put('/users',(req,res)=>{
    const {id,name} = req.body 
    const ida = Number(id)
    if(!(id &&name)){
        return res.status(400).json({success:false,ms:"please enter the fields"})

    }
  let index=  people.findIndex(l=>{
       return l.id===ida
    })
    people[index].name=name
    res.status(200).json({success:true,data:people})

})
app.delete('/users/:id',(req,res)=>{
    const {id} = req.params
    if(!id){
       return res.status(400).json({success:false,err:"please fill"})

    }
    let newpeople = people.splice(people.findIndex(l=>{
        return l.id===Number(id)
    }),1)
    res.status(200).json({success:true,data:newpeople})
})

app.listen(4000,()=>{
    console.log("new")
}) 
