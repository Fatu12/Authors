const AuthorController = require("../controllers/authors.controller")
module.exports = app =>{
    app.get('/api/authors', AuthorController.getAllAuthors)
    app.post('/api/authors', AuthorController.createAuthors)
    app.get('/api/authors/:id', AuthorController.getOneAuthor)
    app.patch('/api/authors/:id', AuthorController.updateProducts)
    app.delete('/api/authors/:id', AuthorController.deleteAuthor)
}