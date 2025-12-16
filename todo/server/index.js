const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors');
const TodoModel =require('./Models/Todo')
const PORT=5000;
const app=express();
app.use(cors());
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/todo')
app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>console.log(err))
})
app.post('/add',(req,res)=>{
    const task=req.body.task;
    TodoModel.create({
        task:task
    }).then(result=> res.json(result))
    .catch(err=> res.json(err))
})
app.listen(PORT,()=>{
    console.log(`server runs at port ${PORT}`)
})