const express=require('express');
const path=require('path')

const roodDir=require('../util/path')
const router=express.Router();
const adminData=require('/admin');


router.get('/',(req,res,next)=>{
    const prodects=adminData.prodects;
    res.render('shop',{prods:prodects,pagetitle:'Shop',path:'/'});
});
module.exports=router;