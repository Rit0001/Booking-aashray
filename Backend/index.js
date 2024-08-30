const express=require('express');
let app=express();
require('./config');
let userModel=require('./user');
app.use(express.json());
let cors=require('cors')
app.use(cors());
let enterModel=require('./enter');
app.use(express.json());

app.post('/booking',async(req,res)=>{
let  data=new userModel(req.body);
let result=await data.save()
result=result.toObject();
// delete result.password;
res.send(result);
})

app.post("/enter",async(req,res)=>{
    let data=new enterModel(req.body);
    let result=await data.save()
    result=result.toObject();
    res.send(result);
})

app.listen("8000",()=>{
    console.log("Server is Connected at Port 8000")
})