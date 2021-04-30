// this file houses all the routes of the app
// each route request will have a certain method to run from the controller file

const AuthorController = require('../controllers/author.controller') // import controller to use its methods

// routes is a function that accepts the Express application as a parameter

module.exports = app => {

    // C
    app.post('/api/authors', AuthorController.createAuthor); // route to create author
    // R
    app.get('/api/authors', AuthorController.allAuthors); // route to get all authors from database
    app.get('/api/authors/:id', AuthorController.oneAuthor); // route to get one author from database from id prop in url
    // U
    app.put('/api/authors/:id', AuthorController.updateAuthor); // route to get one author and update their document
    // D
    app.delete('/api/authors/:id', AuthorController.deleteAuthor); // route to get one author and delete their document

}