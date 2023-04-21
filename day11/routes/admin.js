const express =require('express');
const router=express.Router()
const path=require('path');
const roodDir=require('../util/path');

router.get('/add-prodect',(req,res,next)=>{
        res.sendFile(path.join(roodDir,'views','add-prodect.html'));

})

router.post('/add-prodect',(req,res,next)=>{
        console.log(req.body);
        res.redirect('/');
})

module.exports=router;