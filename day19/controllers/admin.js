const Product = require('../models/product');
exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false
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

  exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        if (!product) {
            return res.redirect('/');
        }
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        })
    })
}

  exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products',
        });
    })
};