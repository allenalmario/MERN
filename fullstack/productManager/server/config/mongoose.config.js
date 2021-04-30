// this file is meant for initiating the connection between the application and the mongoDB server

const mongoose = require('mongoose'); // import mongoose module to be able to connect the server (Express) and database (MongoDB)

// this lines says where and which database to connect to
//string: 'mongodb://localhost/db_name_here'
mongoose.connect('mongodb://localhost/products_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true, // just need these two lines for the connection to the database to be established
}) // mongoose.connect is a promise
    .then(() => console.log("Database connection is set.")) // if connection is successfully established
    .catch(err => console.log("Something went wrong: ", err)) // if it does not