// Step 1: import mongoose
// mongoose module that is imported is more than just connecting the server to the database
const mongoose = require('mongoose'); // also includes schema and model methods,
// which allows me to create a collection, create and add documents to a collection, and add
// it to the MongoDB

// Step 2: Create the schema (aka the rules/structure of the document)
// Schema method takes in an object, which defines the structure of the documents
const ProductSchema = new mongoose.Schema({ // creating a schema for Products, defining a Product Schema
    title: {
        type: String,
        required: [true, "Title field is required"], // setting validations
        minLength: [3, "Title cannot be fewer than 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price field is required"]
    },
    description: {
        type: String,
        required: [true, "Description field is required"],
        minLength: [4, "Description cannot be fewer than 4 characters"],
        maxLength: [50, "Desciption cannot be more than 50 characters"]
    }
}, {timestamp: true}) // timestamp automatically creates and adds createdAt and updatedAt field

// Step 3: Convert schema to a mongoose model, so can make queries with it
// call the model method on a schema, it returns a model object, which is called a document
// first argument provided is the singular name of the collection to be added to
// second argument provided is the schema the model should be built off of

const Product = mongoose.model('Product', ProductSchema);
// the Product variable is set equal to the returned value of the model function
// which is a model object ( or a document ), which enables CRUD functionality

// Step 4: Export the model so it can be used in the controllers
// export the Product variable allows for importing to use in any file
module.exports = Product; 