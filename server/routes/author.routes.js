const AuthorController = require("../controllers/authors.controller");

module.exports = app => {
    app.get("/api/authors/", AuthorController.findAll);
    app.get("/api/authors/:id", AuthorController.findOne);
    app.put("/api/authors/:id", AuthorController.updateOne);
    app.post("/api/authors", AuthorController.createOne);
    app.delete("/api/authors/:id", AuthorController.deleteOne);
};