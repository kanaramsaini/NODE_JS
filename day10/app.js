const express=require('express');
const bodyParser=require('body-parser');
const adminRouters = require('./Routes/admin');
const shopeRouters=require('./Routes/shop');
const app=express();



app.use('/admin',adminRouters);
app.use(shopeRouters);
app.use((req,res,next)=>{
    res.status(404).send("<h1>page not found</h>");
})

app.listen(3000);