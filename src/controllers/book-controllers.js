const bookService = require('../services/book-services')

async function getAllBooks(req, res){
    const books = await bookService.getAll();
    res.status(200).send(books)
}

async function getBookById(req, res, next){
    const { id } = req.params;
    try{
        const book = await bookService.getById(id);
        res.status(200).send(book)
    }catch(error){
        next(error)
    }
}

async function editBook(req, res){
    const { id } = req.params;
    const { isbn, title, autor, year, library } = req.body;
    const book = await bookService.editBook(id, isbn, title, autor, year, library);
    res.status(201).send(book)
}

async function deleteBook(req, res){
    const { id } = req.params;

    await bookService.deleteBook(id);
    
    res.status(200).send(`Libro con id ${id} eliminado correctamente.`)
}


module.exports = { getAllBooks, getBookById, editBook, deleteBook }