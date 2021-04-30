// Use this file to use mongoose to connect to MongoDB

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/jokes', { // connects mongoose to the MongoDB
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));