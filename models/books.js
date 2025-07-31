const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    isbn:{
        type :Number,
        required:true,
    },
    authorName:{
        type :String,

    },
    price:{
        type:Number,
        required:true,
    }
});
const Book = mongoose.model("book",bookSchema)
module.exports =Book;
