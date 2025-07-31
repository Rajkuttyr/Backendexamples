const bookController = require("../controller/book")


const express = require('express');
const router = express.Router();
router.get('/books',bookController.handleGetAllBooks);
router.get("/books/:bookid",bookController.handleGetBooksById);
router.post("/book",bookController.handleCreateNewBook);
router.delete("books/:bookid",bookController.handleDeleteBookById);

module.exports = router;