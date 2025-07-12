// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
// app.post('/submit', (req, res) => {
//   res.send('Form submitted!');
// });
// app.put('/update', (req, res) => {
//   res.send('Data updated!');
// });

// app.get('/about', (req, res) => {
//     return res.json({
//         message: 'This is the about page'
//     });
// });
// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:4000');
// })

const express = require('express');
const bodyParser = require('body-parser');



const app = express();  
app.use(bodyParser.json()); 

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
app.use((req,res,next)=>{console.log("req is coming");
    // return res.json({
    //     message: 'This is the about page'
    // });
    next();
});
app.use((req, res, next) => {
    console.log("Middleware is running");
    next();
});
const books=[
    {bookid:1,name: 'BookOne', author: 'Author A', year: 2021},
];
app.get('/books', (req, res) => {
    return res.json({books});
});
app.get("/books/:bookid",(req, res) => {
    const bookName = req.params.bookid;
    books.find(e=>e.bookid === Number(bookName) ? res.json(e) : res.status(404).send('Book not found'));

});
app.post('/book', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    return res.status(201).json(newBook);
}); 
app.delete('/books/:bookid', (req, res) => {
    const bookId = parseInt(req.params.bookid, 10);
    const bookIndex = books.findIndex(b => b.bookid === bookId);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        return res.status(204).send();
    } else {
        return res.status(404).send('Book not found');
    }
});
