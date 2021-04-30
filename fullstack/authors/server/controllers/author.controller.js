// this file determines what happens when a certain route is hit
// it will house all of the logic for creating, retrieving, updating, and deleting (CRUD functionality)

//import model(s)
const { json } = require('express');
const Author = require('../models/author.model');

// controller is basically just an object where each key has a function for a value
// it will export different functions that perform the basic CRUD operations using the Product model
module.exports = {
    // C
    createAuthor: (req, res) => {
        // creates an Author Document and stores it in the Authors collection in the Author_DB database
        Author.create(req.body)
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.status(400).json(err))
    },
    // R
    allAuthors: (req, res) => {
        Author.find() // returns an array of every document in Author collection
            .then(authors => res.json(authors))
            .catch(err => res.status(400).json(err))
    },
    oneAuthor: (req, res) => {
        Author.findOne({_id: req.params.id}) // finds one document according to the condition, returns the first document satisfying the condition
            .then(singleAuthor => res.json(singleAuthor))
            .catch(err => res.status(400).json(err))
    },
    // U
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate(
            {_id: req.params.id}, // finds a matching document and updates it according to the update argument
            req.body, //updates it according to the update argument
            { new: true, runValidators: true} // after makes the update, doesn't return back the object as it was before the update, and runs the validators surely
        )
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
    },
    // D
    deleteAuthor: (req, res) => {
        Author.findOneAndDelete({_id: req.params.id}) // finds a matching document and removes it
            .then(deletedAuthor => res.json(deletedAuthor))
            .catch(err => res.status(400).json(err))
    }
}