const libraryService = require('../services/library-services')

async function getAllLibraries(req, res){
    const libraries = await libraryService.getAll();
    res.status(200).send(libraries)
}

async function getLibraryById(req, res, next){
    const { id } = req.params;
    try{
        const library = await libraryService.getById(id);
        res.status(200).send(library)
    }catch(error){
        next(error)
    }
}

async function createLibrary(req, res){
    const { name, location, phone} = req.body;
    const library = await libraryService.createLibrary(name, location, phone);
    res.status(201).send(library)
}

async function editLibrary(req, res){
    const { id } = req.params;
    const { name, location, phone } = req.body;
    const library = await libraryService.editLibrary(id, name, location, phone);
    res.status(201).send(library)
}

async function deleteLibrary(req, res){
    const { id } = req.params;

    await libraryService.deleteLibrary(id);
    
    res.status(200).send(`Libreria con id ${id} eliminado correctamente.`)
}

async function addBook(req, res){
    const { id } = req.params;
    const { isbn, title, autor, year } = req.body;

    const newBook = await libraryService.addBook(isbn, title, autor, year, id);

    res.status(201).send(newBook)
}


module.exports = { getAllLibraries, getLibraryById, createLibrary, editLibrary, deleteLibrary, addBook }