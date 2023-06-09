const fs=require('fs');
const path=require('path');
const { mainModule } = require('process');
const p = path.join(path.dirname(process.mainModule.filename),'data','cart.json');

module.exports = class Cart{
static addProduct(id,productPrice){
    fs.readFile(p ,(erro,filecontent)=>{
        let cart ={products:[],totalPrice:0}
        if(!erro){
            cart=JSON.parse(filecontent)
        }
        const existingProductIndex = cart.products.findIndex(prod=>prod.id === id);
        const existingProduct= cart.products(existingProductIndex);
        let updatedProduct;
        if(existingProduct){
            updatedProduct={...existingProduct};
            updatedProduct.qty= updatedProduct.qty+1;
            cart.products=[...cart.products];
            cart.products=[existingProductIndex]=updatedProduct;
        }else{
            updatedProduct={id:id,qty:1};
            cart.products=[...cart.products,updatedProduct];
        }
        cart.totalPrice=cart.totalPrice+ + productPrice;
        fs.writeFile(p, JSON.stringify(cart,erro=>(console.log(erro))))
    })

}

}