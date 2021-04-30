// Step 1: import mongoose
// mongoose module that is imported is more than just connecting the server to the database
const mongoose = require('mongoose'); // also includes schema and model methods,
// which allows me to create a collection, create and add documents to a collection, and add
// it to the MongoDB database

// Step 2: Create the schema (aka the rules/structure of the document)
// Schema method takes in an object, which defines the structure of the documents
const AuthorSchema = new mongoose.Schema({ // creating/defining a schema
    name: {
        type: String,
        required: [true, "Name field is required!"], // setting validations
        minlength: [3, "Author's Name must be at least 3 characters!"]
    }
}, {timestamp: true}) // Automatically creates and adds createdAt and updatedAt field to each document

// call the model method on a schema, it returns a model object, aka a document
// first argument provided is the singular name of the collection to be added to
// second argument provided is the schema the model should be built off of

const Author = mongoose.model('Author', AuthorSchema)
// variable is set equal to the returned value of the model function
// which is a model object ( or a document ), which enables CRUD functionality

// Step 4: Export the model so it can be used in the controllers
module.exports = Author; 