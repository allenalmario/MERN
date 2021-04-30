// this file will be responsible for all of the routes

// import controllers to use the methods here, imports everything exported from controller file
const ProductController = require('../controllers/product.controller');

// routes is a function that accepets the express application as a parameter
module.exports = app => {
    //C
    app.post('/api/products', ProductController.createProduct); // create new products
    //R
    app.get('/api/products', ProductController.getAllProducts); // get all products
    app.get('/api/products/:id', ProductController.getOneProduct); // gets one product by the ID
    //U
    app.put('/api/products/:id', ProductController.updateOneProduct);
    //D
    app.delete('/api/products/:id', ProductController.deleteOneProduct); 
}