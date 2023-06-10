const { book } = require('../models/book-model')
const { Book } = require('../models/book-model')
const jwt = require('jsonwebtoken')

async function getAll(){
    const listBooks = await Book.findAll()
    let result = listBooks.filter((elem)=>{
        return elem.eliminated !== 1;
    })
    return result;
}

async function getById(id){
    const book = await Book.findByPk(id)
    if(!book | book.eliminated === 1){
        throw new Error("Libro no encontrado.")
    }
    return book;
}

async function editBook(id, isbn, title, autor, year, libraryId){
    const book = await Book.findByPk(id)

    if(isbn){
        book.isbn = isbn
    }
    if(title){
        book.title = title;
    }
    if(autor){
        book.autor = autor;
    }
    if(year){
        book.year = year;
    }
    if(libraryId){
        book.library = libraryId;
    }

    const bookEdited = await book.save()
    return bookEdited;
}

async function deleteBook(id){
    const book = await Book.findByPk(id)
    book.eliminated = 1;
    await book.save();
    console.log("deletebook service")
}

module.exports = { getAll, getById, editBook, deleteBook }