const Product = require('../models/product');
exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };
  
  exports.postAddProduct = (req, res, next) => {
    const title=req.body.title;
    const ImageURL=req.body.ImageURL;
    const discount=req.body.discount;
    const description=req.body.description;
    const Price=req.body.Price;
    const freedelivery=req.body.freedelivery;
    const product = new Product(title, ImageURL, discount, description, Price, freedelivery);
    product.save();
    res.redirect('/');
  };

  exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products',
        });
    })
};