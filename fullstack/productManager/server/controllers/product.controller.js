// this file determines what happens when a certain route is hit
// it will house all of the logic for creating, retrieving, updating, and deleting (CRUD functionality)
// it will export different functions that perform the basic CRUD operations using the Product model

// import the Product variable from models 
const { request, response } = require('express');
const Product = require('../models/product.model');

module.exports.getAllProducts = (req, res) => {

    Product.find() // retrieve an array of all documents in Product collection
        .then(allProducts => res.json(allProducts))
        .catch(err => res.status(400).json(err))

}

module.exports.createProduct = (req, res) => {
    // create a new document to store in the Product collection and save it to the Database
    Product.create(req.body) // call create method, pass in body from http request, where data comes from
        // all mongoose methods are promises, need promise resolution
        // take data that comes back from query from database
        .then(createdProduct => res.json(createdProduct))
        .catch(err => res.status(400).json(err));

}

module.exports.getOneProduct = (req, res) => {
    // retrieve 1 document (the first record found) matching the query object criteria
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.status(400).json(err))
}

module.exports.updateOneProduct = (req, res) => {
    // 
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true} // after makes the update, doesn't return back the object before the update, and run the validators surely
    )
        .then(updatedPerson => res.json(updatedPerson))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteOneProduct = (req, res) => {
    //
    Product.findOneAndDelete({ _id: req.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => res.status(400).json(err))
}