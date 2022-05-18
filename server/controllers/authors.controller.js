const Author = require("../models/author.model");

module.exports = {
    findAll: (req, res) => {
        Author.find()
            .then(allAuthors => res.json({ authors: allAuthors }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    },

    findOne: (req, res) => {
        Author.findById(req.params.id)
            .then(oneAuthor => res.json({ author: oneAuthor }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    },

    createOne: (req, res) => {
        Author.create(req.body)
            .then(newAuthor => res.json({ author: newAuthor }))
            .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
    },

    updateOne: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedAuthor => res.json({ author: updatedAuthor }))
            .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
    },

    deleteOne: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    }
}