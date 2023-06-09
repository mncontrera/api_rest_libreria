const express = require('express')
const libraryController = require('../controllers/library-controllers')
const { isAuthenticated } = require('../middlewares/authentication')

const router = express.Router()

router.post("/crear-libreria", libraryController.createLibrary)
router.get("/obtener-todas", libraryController.getAllLibraries)
router.get("/obtener-por-id/:id", libraryController.getLibraryById)
router.put("/editar-libreria/:id", libraryController.editLibrary)
router.delete("/eliminar/:id", libraryController.deleteLibrary)
router.post("/agregar-libro-nuevo/:id", libraryController.addBook)

module.exports = router