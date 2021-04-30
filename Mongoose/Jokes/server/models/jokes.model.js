const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    // this is the structure of the documents in the database
    setup: {
        type: String,
        minlength: [10, "Setup must be at least 10 characters"]
    },
    punchline: {
        type: String,
        minlength: [3, "Punchline must be at least 3 characters"]
    }
})

const Joke = mongoose.model('Joke', JokeSchema); // takes schema blueprint, builds the "Joke" collection,
// new documents made will follow the structure of the object schema

module.exports = Joke;