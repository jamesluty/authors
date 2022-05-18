const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    }
})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;