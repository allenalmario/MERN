// This file is responsible for initiating the connection between the Express application and the MongoDB database

const mongoose = require('mongoose') // mongoose is the library that connects app to database

// this line connects to the database with new url parser and unified topology
mongoose.connect('mongodb://localhost/author_db', {
    useNewUrlParser: true, // just need these two lines to
    useUnifiedTopology: true, // connect to database
    useFindAndModify: false
})
    .then( () => console.log("Success! Database connection established."))
    .catch( err => console.log('Something went wrong', err))
