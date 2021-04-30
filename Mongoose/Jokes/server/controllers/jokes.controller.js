const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    // Retreieve an array of all documents in the Joke collection
    Joke.find() // pulls all the jokes out of the database
        .then(allJokes => res.json({ jokes: allJokes})) // grabs all the jokes, passes them into a json object, sends back the json object
        .catch(err => res.json({ message: 'Something went wrong', error: err}))
}

module.exports.findOneSingleJoke = (req, res) => {
    // Retrieve a document (first record found) matching the query object criteria
    Joke.findOne({ _id: req.params.id }) // find one Joke by _id passed in from request parameter id
    .then(oneSingleJoke => res.json({ joke: oneSingleJoke })) // grabs the single joke, passes it into a json object, sends back the json object
    .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body) // takes the json object passed in through the post request and creates a new joke document in the collection
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke })) // takes the new document and shoots it back to the response as a json object
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id }, // finds a document that matches the id
        req.body, // takes the updated json object in request body and updates the document
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
}

module.exports.deleteAnExistingJoke = (req, res) => {
    // deletes 1 document that matches the query object criteria 
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}