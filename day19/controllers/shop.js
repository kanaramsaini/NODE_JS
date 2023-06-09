const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: ' My Products',
      path: '/products',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};
exports.getProduct=(req,res,next)=>{
  const prodId=req.params.productId;
  product.findById(prodId,product=>{
    res.render('shop/products-detail',{product:product, pageTitle:product.title,path:'/products'});
  })
  res.redirect('/')

}
exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  })
};

exports.postCart=(req, res,next)=>{
  const prodId=req.body.productId;
  console.log(prodId);
  res.redirect('/cart')
}
exports.getOrders=(req,res,next)=>{
  res.render('shop/orders',{path:'/orders',pageTitle:'Orders'})
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  })
}
