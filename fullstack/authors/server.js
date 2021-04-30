// this file is responsible for making our express server

const express = require('express') // importing express, making it possible to create a server
const app = express() // invoking the express function, putting whatever is returned into the app var, thus creating the server, inititializing it into var app 
const port = 8000 // just setting the port we want to port var
const cors = require('cors') 

app.use(cors()) // ability to make cross-origin requests

// app needs to be able to accept json requests that are encoded in the url
app.use(express.json()); // set up app to be able to read and deal with json
// to pull everything we need from post requests
app.use(express.urlencoded({ extended: true })); // decode the url thats coming in and extract json stuff from it

// require and run the mongoose.config.js file to finally establish the connection to the database
require('./server/config/mongoose.config')

// import the routes file, then because routes is a function that accepts the app as a parameter
require('./server/routes/author.routes')(app); // pass in the app as a parameter as the arguement

// tell app to listen for a certain port
app.listen(port, () => console.log(`Listening on port: ${port}, Server is up and running`))