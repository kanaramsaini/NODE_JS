const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path')
const app = express();
const adminData = require('./routes/admin')


const adminRouters = require('./routes/admin');
const shopRouters = require('./routes/shop');

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin',adminData.routes);
app.use(shopRouters);


app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
})


app.listen(8080);