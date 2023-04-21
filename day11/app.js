const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const rootDir = require('./util/path')
const app=express();

const adminRouter=require('./routes/admin');
const shopRouter=require('./routes/shop');
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRouter);
app.use(shopRouter);


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})
app.listen(5050);