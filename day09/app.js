// const http=require('http');
const express= require('express');
const path=require('path');
const bodyParser=require('body-parser')

const app=express();
app.use(bodyParser.urlencoded({extended:false}))
app.use((req,res,next)=>{
    console.log("No.1 middleware run ");
    next();
})

app.use((req,res,next)=>{
    console.log("No.2 middleware run ");
    next();
})
app.use((req,res,next)=>{
    console.log("No.3 middleware run ")
    next();
})
app.use((req,res,next)=>{
    console.log("No.4 middleware run ");
    next();
})
app.use('/',(req,res,next)=>{
    console.log("No.5 middleware run ");
    // res.sendFile(path.join(__dirname,'../','index.html'));
    res.sendFile(path.join(__dirname, '../','index.html'));
})
app.listen(8000)

