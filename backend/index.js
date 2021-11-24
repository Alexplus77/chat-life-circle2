const express=require('express')
const bodyParser=require('body-parser')

const PORT = process.env.PORT || 3001
const app=express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT,()=>{
    console.log(`Server starting on port ${PORT}`)
})


const db=[] /* База данных */

app.get('/api', (req, res)=>{
    setTimeout(()=>res.status(200).json( db), 2000)
})

app.post('/api', (req, res)=>{
    db.push({...req.body, id:Math.random()})
setTimeout(()=>res.status(201).json(db), 2000)
})
