const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),'data','products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, ImageURL, discount, description, Price, freedelivery) {
    this.title = title;
    this.ImageURL=ImageURL;
    this.discount=discount;
    this.description=description;
    this.Price=Price;
    this.freedelivery=freedelivery;
  }

  save() {
    this.id=Math.random().toString();
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
  static findById(id,cb){
    getProductsFromFile(products=>{
      const product=products.find(p=>p.id===id)
      cb(product);
    })
  }
};
