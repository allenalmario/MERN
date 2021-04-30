const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes); // returns an array of all the documents in the Joke Collection
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke); // Returns a specific joke with matching _id
    app.put('/api/jokes/:id', JokeController.updateExistingJoke); // Updates the joke with the matching ID in the collection
    app.post('/api/jokes', JokeController.createNewJoke); // Adds a new joke document to the collection
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke); // deletes a document that matches the id in the collection
}