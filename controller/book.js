const Book = require("../models/books");
let books =[{
    "id":1,
    "name":"ABc"
}]
const fs = require("fs");
const path = require("path")
async function handleGetBooksById(req, res){

    const bookName = req.params.bookid;
    const x = await Book.findById(bookName);
    res.json(x);

}
const handleGetAllBooks= async (req, res) => {
    const bookInDb = await Book.find(
        
        {}
    )
    console.log("books in db", bookInDb)

    // const htmlfile = fs.readFileSync(path.resolve("books.html"),"utf-8")
    // const x= htmlfile.replace("books",JSON.stringify(books));
    // return res.end(x);
    return res.json(
        bookInDb
    );
    
   
}
const handleCreateNewBook = async (req, res) => {
    const newBook = req.body;
    await Book.create(newBook);
    return res.status(201).json(newBook);
}

const handleDeleteBookById = (req, res) => {
    const bookId = parseInt(req.params.bookid, 10);
    const bookIndex = books.findIndex(b => b.bookid === bookId);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        return res.status(204).send();
    } else {
        return res.status(404).send('Book not found');
    }
}
module.exports={
    handleGetAllBooks,
    handleGetBooksById,
    handleCreateNewBook,
    handleDeleteBookById,
 


    
}
