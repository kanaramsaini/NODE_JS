const { Router } = require('express');
const express=require('express');

const path=require('path');

const routrs=express.Router();



routrs.get('/add-prodect',(req,res,next)=>{

    res.sendFile(path.join('HTML','add-prodect.html'));
});

routrs.POST('/add-prodect',(req,res,next)=>{
            res.redirect('/');
});

module.exports=router;