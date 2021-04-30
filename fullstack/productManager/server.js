const express = require('express') // importing express js library that lets me create a server
// var express is set equal to a function that comes from the node module
// put it simply, it is now a function that will create a server

const cors = require('cors');

const app = express(); // create the server
// run the express function and set its return to the var app
// app is the server itself, used to set up the routes, and to set up the server to run and listen on a certain port

// now we have an official server

app.use(cors()); //  ability to make cross-origin requests

// require mongoose config to finally establish the connection between the server and the database
require('./server/config/mongoose.config') 

// app needs to be able to accept json requests that are encoded in the url
app.use(express.json()); // set up app to be able to read and deal with json
app.use(express.urlencoded({ extended: true })) // decode the url thats coming in and extract json stuff from it
// these two need to be in the app to accept post, put and path requests

// import the routes file, then because routes is a function that accepts the app as a parameter
// pass in the app as a parameter
require('./server/routes/product.routes')(app);

// runs the server, tell app to listen to port 8000 for http requests
app.listen(8000, () => // pass port you want to listen on and function that runs when server gets started
    console.log("Listening on port 8000")
); // launching the server