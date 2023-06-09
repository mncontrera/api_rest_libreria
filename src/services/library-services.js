const { Library } = require('../models/library-model')
const { Book } = require('../models/book-model')
const jwt = require('jsonwebtoken')

async function getAll(){
    const listlibraries = await Library.findAll()
    let result = listlibraries.filter((elem)=>{
        return elem.eliminated !== 1;
    })
    return result;
}

async function getById(id){
    const library = await Library.findByPk(id)
    if(!library | library.eliminated === 1){
        throw new Error("Libreria no encontrada.")
    }
    return library;
}

async function createLibrary(name, location, phone){
    const library = new Library();
    library.name = name;
    library.location = location;
    library.phone = phone;

    const libraryCreated = await library.save()
    return libraryCreated;
}

async function editLibrary(id, name, location, phone){
    const library = await Library.findByPk(id)

    if(name){
        library.name = name
    }
    if(location){
        library.location = location;
    }
    if(phone){
        library.phone = phone;
    }

    const libraryEdited = await library.save()
    return libraryEdited;
}

async function deleteLibrary(id){
    const library = await Library.findByPk(id)
    library.eliminated = 1;
    await library.save();
    console.log("deleteLibrary service")

    //await library.destroy()
}

async function addBook(isbn, title, autor, year, libraryId){
    const book = new Book()
    book.isbn = isbn
    book.title = title
    book. autor = autor
    book.year = year
    book.library = libraryId

    const bookCreated = await book.save()
    return bookCreated;
}

module.exports = { getAll, getById, createLibrary, editLibrary, deleteLibrary, addBook }